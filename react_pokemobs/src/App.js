import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import FormsContainer from "./containers/FormsContainer";
import PokeDex from "./containers/PokeDex";
import API from "./adapters/API";
import Arena from "./components/Arena";
import Pokemon from "./components/Pokemon";
import PokeCentre from "./components/PokeCentre";

class App extends Component {
  state = {
    user: "no token"
  };

  componentDidMount() {
    API.validateUser().then(user =>
      this.setState({
        user: user.user
      })
    );
  }

  submitSignUp = user => API.signUpUser(user);

  submitSignIn = user => API.signInUser(user);

  // logOut = () => {
  //   API.clearToken();
  //   this.setState({ user: "no token" });
  // };

  render() {
    const { user } = this.state;
    return (
      <Router>
        <React.Fragment>
          {user !== "no token" ? (
            <Route exact path="/" component={PokeDex} />
          ) : (
            <Route
              exact
              path="/login"
              component={FormsContainer}
              submitSignUp={this.submitSignUp}
              submitSignIn={this.submitSignIn}
            />
          )}

          <Route exact path="/arena" component={Arena} />
          <Route exact path="/pokemon" component={Pokemon} />
          <Route exact path="/pokecentre" component={PokeCentre} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
