import React, { Component } from "react";
import HealthBar from "./HealthBar";
import GameMenu from "./GameMenu";

class PlayerPokemon extends Component {

  state = {
    pokemon: this.props.pokemon,
    health: this.props.pokemon.hp,
    player:true
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
          <div className="enemy-health-bar">
            <div>name: {this.state.pokemon.name}</div>
            <HealthBar
              pokemon={this.state.pokemon}
              startingHP={this.props.pokemon.hp}
              health={this.props.health}
              updateTurn={this.props.updateTurn}
               player={this.state.player}
               elementalAttack={this.props.elementalAttack}
          regularAttack={this.props.regularAttack}
          
          runAway={this.props.runAway}
          turn={this.props.turn}
            />
          </div>
        </div>
        {/* <GameMenu
          pokemon={this.state.pokemon}
          elementalAttack={this.props.elementalAttack}
          regularAttack={this.props.regularAttack}
          heal={this.heal}
          runAway={this.props.runAway}
          turn={this.props.turn}
        /> */}
      </div>
    );
  }
}

export default PlayerPokemon;
