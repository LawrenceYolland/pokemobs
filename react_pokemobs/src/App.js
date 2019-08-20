import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import FormsContainer from "./containers/FormsContainer";
import PokeDex from "./containers/PokeDex";
import API from "./adapters/API";
import Arena from "./components/Arena";
import Pokemon from "./containers/PokemonContainer";
import PokeCentre from "./components/PokeCentre";
import PokemonContainer from "./containers/PokemonContainer";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    API.validateUser().then(user => {
      if (user.user) {
        this.setState({
          user: {
            username: user.user.data.attributes.username,
            user_id: user.user.data.attributes.id
          }
        });
      }
    });
  }

  submitSignUp = user => {
    API.signUpUser(user).then(user =>
      this.setState({
        user: user.data.attributes.username
      })
    );
  };

  submitSignIn = user => {
    API.signInUser(user).then(user =>
      this.setState({
        user: user.data.attributes.username
      })
    );
  };

  logOut = () => API.clearToken();

  render() {
    return (
      <React.Fragment>
        {this.state.user !== null ? (
          <PokeDex addPokemon={this.fetchPokemon} logOut={this.logOut} user={this.state.user} />
        ) : (
          <FormsContainer
            submitSignUp={this.submitSignUp}
            submitSignIn={this.submitSignIn}
          />
        )}

        <Route exact path="/arena" component={Arena} />
        <Route exact path="/pokemon" component={Pokemon} />
        <Route exact path="/pokecentre" component={PokeCentre} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
