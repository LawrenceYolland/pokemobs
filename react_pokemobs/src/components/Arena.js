import React, { Component } from "react";
import PlayerPokemon from "./PlayerPokemon";
import EnemyPokemon from "./EnemyPokemon";

class Arena extends Component {
  state = {
    playerPokemon: this.props.pokemon[3],
    enemyPokemon: this.props.pokemon[0],
    turn: true
  };

  filterEnemyHealth = () => {
    const pokemon = this.props.pokemon.find(
      p => p.name === this.state.enemyPokemon.name
    );
    return pokemon.hp;
  };

  filterPlayerHealth = () => {
    const pokemon = this.props.pokemon.find(
      p => p.name === this.state.enemyPokemon.name
    );
    return pokemon.hp;
  };

  elementalAttack = () => {
    console.log("elemental attack");
    this.updateTurn();
  };

  regularAttack = () => {
    console.log("regular attack");
    this.updateTurn();
  };

  runAway = () => {
    alert("You're a little bitch");
  };

  updateTurn = () => {
    this.setState({
      turn: !this.state.turn
    });
    alert("killed you with vines or somethinf")
  };

  render() {
    const style = {
      backgroundImage:
        'url("https://www.tynker.com/projects/images/08c85034c83474358721707acbed426823f1c4ef/background-scene---grass-battle-arena.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return (
      <div>
        Arena
        <div className="game-body" style={style}>
          <div className="pokemon-game-containers">
            <EnemyPokemon
              pokemon={this.state.enemyPokemon}
              health={this.filterEnemyHealth()}
            />
            <PlayerPokemon
              pokemon={this.state.playerPokemon}
              health={this.filterPlayerHealth()}
              elementalAttack={this.elementalAttack}
              regularAttack={this.regularAttack}
              updateTurn={this.updateTurn}
              runAway={this.runAway}
              turn={this.state.turn}
            />
          </div>
        </div>
      </div>
    );
  }
}

// style={background-image: url("https://www.tynker.com/projects/images/08c85034c83474358721707acbed426823f1c4ef/background-scene---grass-battle-arena.png")
export default Arena;
