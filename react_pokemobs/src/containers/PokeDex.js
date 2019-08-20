import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PokemonContainer from "./PokemonContainer";
import Arena from "../components/Arena";
import PokeCentre from "../components/PokeCentre";

class PokeDex extends Component {
  state = {
    query: "",
    pokemon: [],
    menuToggle: 0,
    selectedPokemon: []
  };

  fetchData = () => {
    return fetch("http://localhost:3000/pokemon").then(resp => resp.json());
  };

  componentDidMount() {
    this.fetchData().then(pokemon =>
      pokemon.forEach(p => {
        this.setState({
          pokemon: [...this.state.pokemon, p]
        });
      })
    );
  }

  menuToggle = () => {
    this.setState({ menuToggle: 0 });
  };

selectPokemon = selectedPokemon => {
  this.setState({
    selectedPokemon
  })
}

  render() {
    let view;
    {
      if (this.state.menuToggle === 1) {
        view = <Arena />;
      } else if (this.state.menuToggle === 2) {
        view = <PokemonContainer pokemon={this.state.pokemon} selectPokemon={this.selectPokemon} />;
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
        <button onClick={() => this.menuToggle()}>back it up now yo</button>
        {view}
      </div>
    );
  }
}

export default PokeDex;
