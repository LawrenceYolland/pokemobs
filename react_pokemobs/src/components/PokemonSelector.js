import React, { Component } from "react";
import API from "../adapters/API";
import { Button } from "semantic-ui-react";

class PokemonSelector extends Component {
  handleClick = () => {
    API.addUserPokemon(
      this.props.user.user_id,
      this.props.pokemon.find(p => p.name === "magikarp")
    );

    this.props.setFirstPokemon(
      this.props.pokemon.find(p => p.name === "magikarp")
    );
  };

  render() {
    return (
      <div>
        <h1>Select a Random Starting Pokemon</h1>
        <img
          alt="Pokeball"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        />
        <Button onClick={this.handleClick}>Get a Pokemon</Button>
      </div>
    );
  }
}

export default PokemonSelector;
