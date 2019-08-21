import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class GameMenu extends Component {
  enemyTurn = () => {
    if (!this.props.turn) {
      const options = [
        this.props.elementalAttack,
        this.props.regularAttack,
        this.props.heal
      ];
      const rand = Math.floor(Math.random() * Math.floor(3) - 1);
      console.log(rand);
      // options[rand];
      this.props.updateTurn();
    }
  };

  render() {
    return (
      <div className="stats-board">
        <Button
          disabled={!this.props.turn}
          onClick={() => {
            this.props.elementalAttack();
            this.enemyTurn();
          }}
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
