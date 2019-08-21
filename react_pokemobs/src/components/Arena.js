import React, { Component } from "react";
import PlayerPokemon from "./PlayerPokemon";
import EnemyPokemon from "./EnemyPokemon";
import StatsBoard from "./StatsBoard";


class Arena extends Component {
  render() {
    return (
      <div>
        Arena
        <div className="the-game">
            This is where the game will be by the way
            <PlayerPokemon />
            <EnemyPokemon />
            <StatsBoard />
        </div>
      </div>
    );
  }
}

export default Arena;
