import React, { Component } from "react";
import HealthBar from "./HealthBar";

class EnemyPokemon extends Component {
  render() {
    return (
      <div className="enemy-pokemon">
        enemy pokemon
        <HealthBar />
      </div>
    );
  }
}

export default EnemyPokemon;
