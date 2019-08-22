import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class GameMenu extends Component {
  render() {
    return (
      <div className="stats-board">
        <Button
          disabled={!this.props.turn}
          onClick={this.props.elementalAttack}
        >
          Elemental Attack
        </Button>
        <Button disabled={!this.props.turn} onClick={this.props.regularAttack}>
          Regular Attack
        </Button>
        <Button disabled={!this.props.turn} onClick={this.props.heal}>
          Heal
        </Button>
        <Button disabled={!this.props.turn} onClick={this.props.runAway}>
          Run
        </Button>
      </div>
    );
  }
}

export default GameMenu;
