import React, { Component } from "react";
import HealthBar from "./HealthBar";


class PlayerPokemon extends Component {
  render() {
    return (
      <div className="player-pokemon">
          player pokemon
          <HealthBar />
      </div>
    );
  }
}

export default PlayerPokemon;
