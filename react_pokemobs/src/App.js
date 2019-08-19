import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import FormsContainer from "./containers/FormsContainer";
import PokeDex from "./containers/PokeDex";
import API from "./adapters/API";
import Arena from "./components/Arena";
import Pokemon from "./components/Pokemon";
import PokeCentre from "./components/PokeCentre";

class App extends Component {
  state = {
    user: null,
    pokemon: []
  };

  componentDidMount() {
    API.validateUser().then(data => {
      if (data.user) {
        this.setState({
          user: data.user.data
        });
      }
    });


      API.fetchPokemon().then(console.log);
    
  }

  submitSignUp = user => API.signUpUser(user);

  submitSignIn = user => {
    API.signInUser(user).then(user =>
      this.setState({
        user: user.data
      })
    );
  };

  logOut = () => API.clearToken();

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <div>LOADING THE PAGE</div>
        {/* {user ? ( */}
          <PokeDex addPokemon={this.fetchPokemon} logOut={this.logOut} />
        {/* ) : ( */}
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
