import React, { Component } from "react";
import HealthBar from "./HealthBar";

class EnemyPokemon extends Component {
  
  state = {
    pokemon: this.props.pokemon,
    player: false
  };

  render() {

    return (
      <div className="enemy-pokemon">
        <img
          className="enemy-pokemon-sprite"
          src={this.props.pokemon.img_front}
          alt="a pokemon"
        />
        <HealthBar
          pokemon={this.state.pokemon}
          startingHP={this.props.pokemon.hp}
          health={this.props.health}
          player={this.state.player}
        />
      </div>
    );
  }
}

export default EnemyPokemon;
