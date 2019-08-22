import React, { Component } from "react";
import HealthBar from "./HealthBar";
import GameMenu from "./GameMenu";

class PlayerPokemon extends Component {
  state = {
    pokemon: this.props.pokemon,
    player: true
  };

  render() {
    return (
      <div>
        <div className="player-pokemon">
          <img
            className="player-pokemon-sprite"
            src={this.props.pokemon.img_back}
            alt="a pokemon"
          />

          <HealthBar
            pokemon={this.props.pokemon}
            startingHP={this.props.pokemon.hp}
            health={this.props.health}
            updateTurn={this.props.updateTurn}
            player={this.state.player}
            elementalAttack={this.props.elementalAttack}
            regularAttack={this.props.regularAttack}
            runAway={this.props.runAway}
            turn={this.props.turn}
            enemyTurn={this.props.enemyTurn}
            heal={this.props.heal}
          />
        </div>

      </div>
    );
  }
}

export default PlayerPokemon;
