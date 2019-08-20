import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PokemonContainer from "./PokemonContainer";
import Arena from "../components/Arena";
import PokeCentre from "../components/PokeCentre";
import API from "../adapters/API";

class PokeDex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      pokemon: [],
      usersPokemon: [],
      menuToggle: 0,
      selectedPokemon: [],
      user: props.user
    };
  }

  componentDidMount() {
    API.fetchPokemon().then(data =>
      data.data.forEach(pokemon =>
        this.setState({
          pokemon: [...this.state.pokemon, pokemon.attributes]
        })
      )
    );
    API.fetchUserPokemon()
      .then(data =>
        data.data.filter(
          pokemon => pokemon.attributes.user_id === this.state.user.user_id
        )
      )
      .then(user_pokemon =>
        user_pokemon.forEach(p =>
          this.setState({
            usersPokemon: [...this.state.usersPokemon, p.attributes.pokemon_id]
          })
        )
      );
  }

  menuToggle = () => {
    this.setState({ menuToggle: 0 });
  };

  selectPokemon = selectedPokemon => {
    API.addUserPokemon(this.state.user.user_id, selectedPokemon);
  };

  render() {
    let view;
    {
      if (this.state.menuToggle === 1) {
        view = <Arena />;
      } else if (this.state.menuToggle === 2) {
        view = (
          <PokemonContainer
            pokemon={this.state.pokemon}
            user={this.state.user}
            userPokemon={this.state.usersPokemon}
            selectPokemon={this.selectPokemon}
          />
        );
      } else if (this.state.menuToggle === 3) {
        view = <PokeCentre />;
      } else {
        view = (
          <div>
            <h1>Pokedex</h1>
            <button onClick={() => this.setState({ menuToggle: 1 })}>
              Arena
            </button>
            <button onClick={() => this.setState({ menuToggle: 2 })}>
              Pokemon
            </button>
            <button onClick={() => this.setState({ menuToggle: 3 })}>
              Pokecentre
            </button>
          </div>
        );
      }
    }

    return (
      <div className="pokedex-menu">
        <button onClick={() => this.menuToggle()}>go back</button>
        {view}
      </div>
    );
  }
}

export default PokeDex;
