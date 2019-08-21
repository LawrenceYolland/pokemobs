import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PokemonContainer from "./PokemonContainer";
import Arena from "../components/Arena";
import PokeCentre from "../components/PokeCentre";
import API from "../adapters/API";
import PokemonSelector from "../components/PokemonSelector";

class PokeDex extends Component {
  state = {
    menuToggle: 0
  };

  filterUserPokemon = () => {
    return this.props.allUsersPokemon.filter(
      p => p.user_id === this.props.user.user_id
    );
  };

  menuToggle = () => {
    this.setState({ menuToggle: 0 });
  };

  selectPokemon = selectedPokemon => {
    API.addUserPokemon(this.props.user.user_id, selectedPokemon);
  };

  render() {
    let view;

    if (this.state.menuToggle === 1) {
      view = <Arena pokemon={this.props.pokemon}  />;
    } else if (this.state.menuToggle === 2) {
      view = (
        <PokemonContainer className="pokemon-container"
          pokemon={this.props.pokemon}
          user={this.props.user}
          userPokemon={this.props.userPokemon}
          selectPokemon={this.selectPokemon}
          filterUserPokemon={this.filterUserPokemon()}
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

    return (
      <div className="pokedex-menu">
        <button onClick={() => this.menuToggle()}>go back</button>
        <button onClick={() => this.props.logOut()}>Log Out</button>
        {this.filterUserPokemon().length !== 0 ||
        this.props.userPokemon.length !== 0 ? (
          view
        ) : (
          <PokemonSelector
            pokemon={this.props.pokemon}
            user={this.props.user}
            setFirstPokemon={this.props.setFirstPokemon}
          />
        )}
      </div>
    );
  }
}

export default PokeDex;
