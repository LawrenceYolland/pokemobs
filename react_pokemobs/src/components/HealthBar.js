import React, { Component } from "react";
import { Progress, Button } from "semantic-ui-react";
import GameMenu from "./GameMenu";
class HealthBar extends Component {
  state = {
    health: ""
  };

  componentDidMount() {
    this.setState({
      health: this.props.health
    });
  }

  decrement = () => {
    this.setState(prevState => ({
      health: prevState > 0 ? 0 : prevState.health - 10
    }));
  };

  heal = () => {
    this.setState(prevState => ({
      health: prevState > 0 ? 0 : prevState.health + 10
    }));
    console.log("heal");
    this.props.updateTurn();
  };

  render() {
    return (
      <div>
        <Progress
          value={this.state.health}
          total={this.props.startingHP}
          indicating
          label="HP"
        />
        {this.props.player ? (
          <GameMenu
            pokemon={this.props.pokemon}
            elementalAttack={this.props.elementalAttack}
            regularAttack={this.props.regularAttack}
            heal={this.heal}
            runAway={this.props.runAway}
            turn={this.props.turn}
            updateTurn={this.props.updateTurn}
          />
        ) : null}
        <Button onClick={this.decrement}>decrement health (testing)</Button>
      </div>
    );
  }
}
export default HealthBar;
