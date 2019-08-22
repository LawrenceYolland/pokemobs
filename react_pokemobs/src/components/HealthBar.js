import React, { Component } from "react";
import { Progress } from "semantic-ui-react";
import GameMenu from "./GameMenu";

class HealthBar extends Component {
  state = {
    health: this.props.health
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.health !== this.props.health) {
      this.setState({
        health: this.props.health
      });
      
    }
  }

  decrement = () => {
    this.setState(prevState => ({
      health: prevState > 0 ? 0 : prevState.health - 10
    }));
  };

  render() {
    return (
      <div>
        <Progress
          value={this.props.health}
          total={this.props.startingHP}
          indicating
          label={this.props.pokemon.name}
        />
        {this.props.player ? (
          <GameMenu
            pokemon={this.props.pokemon}
            elementalAttack={this.props.elementalAttack}
            regularAttack={this.props.regularAttack}
            heal={this.props.heal}
            runAway={this.props.runAway}
            turn={this.props.turn}
            updateTurn={this.props.updateTurn}
          />
        ) : null}
      </div>
    );
  }
}
export default HealthBar;
