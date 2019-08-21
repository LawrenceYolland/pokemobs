import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class GameMenu extends Component {
  enemyTurn = () => {
    console.log("its the enemies turn");

    setInterval(() => {
      const options = [
        () => this.props.elementalAttack,
        () => this.props.regularAttack,
        () => this.props.heal
      ];
      console.log("enemy choices:", options);

      const rand = Math.floor(Math.random() * Math.floor(3) - 1);
      console.log("enemy chooses:", options[rand]);
      options[0]();
      this.props.updateTurn();
    }, 2000);
  };

  // componentDidUpdate() {
  //   this.props.turn ? console.log("player's turn") : null // this.enemyTurn(); this runs automaticaly as its alway updating ...
  // }

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
