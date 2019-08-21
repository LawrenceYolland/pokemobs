import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Route, withRouter } from "react-router-dom";
import FormsContainer from "./containers/FormsContainer";
import PokeDex from "./containers/PokeDex";
import API from "./adapters/API";
import Arena from "./components/Arena";
import Pokemon from "./containers/PokemonContainer";
import PokeCentre from "./components/PokeCentre";

class App extends Component {
  state = {
    user: { username: null, id: null },
    pokemon: [],
    selectedPokemon: [],
    userPokemon: [],
    allUsersPokemon: []
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

    API.fetchPokemon().then(data =>
      data.data.forEach(pokemon =>
        this.setState({
          pokemon: [...this.state.pokemon, pokemon.attributes]
        })
      )
    );

    API.fetchUserPokemon().then(users_pokemon =>
      users_pokemon.data.forEach(p =>
        this.setState({
          allUsersPokemon: [...this.state.allUsersPokemon, p.attributes]
        })
      )
    );
  }

  submitSignUp = user => {
    API.signUpUser(user).then(user => {
      this.setState({
        user: {
          username: user.data.attributes.username,
          user_id: user.data.attributes.id
        }
      });
    });
  };

  submitSignIn = user => {
    API.signInUser(user).then(user =>
      this.setState({
        user: {
          username: user.data.attributes.username,
          user_id: user.data.attributes.id
        }
      })
    );
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: null, usersPokemon: [], selectedPokemon: [] });
  };

  setFirstPokemon = pokemon => {
    this.setState({
      userPokemon: [pokemon]
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.user !== null ? (
          <PokeDex
            addPokemon={this.fetchPokemon}
            logOut={this.logOut}
            user={this.state.user}
            pokemon={this.state.pokemon}
            allUsersPokemon={this.state.allUsersPokemon}
            userPokemon={this.state.userPokemon}
            setFirstPokemon={this.setFirstPokemon}
          />
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
