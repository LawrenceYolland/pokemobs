import React, { Component } from "react";
import PlayerPokemon from "./PlayerPokemon";
import EnemyPokemon from "./EnemyPokemon";

class Arena extends Component {
  state = {
    playerPokemon: this.props.pokemon[0],
    enemyPokemon: this.props.pokemon[3],
    turn: true,
    enemyHealth: null,
    playerHealth: null
  };

  componentDidMount() {
    this.filterPlayerHealth();
    this.filterEnemyHealth();

    if (this.props.playerPokemon) {
      const rand = Math.floor(Math.random() * Math.floor(150))
      this.setState({
        playerPokemon: this.props.playerPokemon,
        enemyPokemon: this.props.pokemon[rand],
        playerHealth: this.props.playerPokemon.hp,
        enemyHealth: this.props.pokemon[rand].hp
      });
    }
  }

  runPlayerWins = () => {
    alert("player wins");
    this.props.menuToggle();
  };

  runEnemyWins = () => {
    alert("enemy wins");
    this.props.menuToggle();
  };

  filterEnemyHealth = () => {
    const pokemon = this.props.pokemon.find(
      p => p.name === this.state.enemyPokemon.name
    );
    this.setState({
      enemyHealth: pokemon.hp
    });
  };

  filterPlayerHealth = () => {
    const pokemon = this.props.pokemon.find(
      p => p.name === this.state.playerPokemon.name
    );
    this.setState({
      playerHealth: pokemon.hp
    });
  };

  // ATTACKS______________________________________________________________
  playerElementalAttack = () => {
    console.log("elemental attack");
    this.damageEnemyPokemon();
    this.updateTurn();
    if (this.state.playerPokemon.pokemon_type !== this.state.enemyPokemon.pokemon_type){
      this.damageEnemyPokemon(15)
      alert("It's super effective!")
    } else {
      this.damageEnemyPokemon(5)
      alert("It's not very effective")
    }
    setTimeout(() => this.enemyTurn(), 100);
  };

  playerRegularAttack = () => {
    console.log("regular attack");
    this.damageEnemyPokemon(10);

    setTimeout(() => this.enemyTurn(), 100);
    this.updateTurn();
  };

  

  enemyElementalAttack = () => {
    console.log("enemy elemental attack");
    if (this.state.playerPokemon.pokemon_type !== this.state.enemyPokemon.pokemon_type){
      this.damagePlayerPokemon(15)
      console.log("It's super effective!")
    } else {
      this.damagePlayerPokemon(5)
      console.log("It's not very effective")
    }
    this.updateTurn();
  };

  enemyRegularAttack = () => {
    alert("enemy regular attack");

    this.damagePlayerPokemon(10);
    this.updateTurn();
  };

  // _________________________________________________________________________________________

  enemyHeal = () => {
    alert("Enemy Heals");
    this.setState({
      enemyHealth:
      this.state.enemyHealth < this.state.enemyPokemon.hp
          ? this.state.enemyHealth + 10
          : this.state.enemyHealth
    });
    this.updateTurn();
  };

  heal = () => {
    this.setState({
      playerHealth:
        this.state.playerHealth < this.state.playerPokemon.hp
          ? this.state.playerHealth + 10
          : this.state.playerHealth
    });
    setTimeout(() => this.enemyTurn(), 100);
    this.updateTurn();
    console.log(this.state.playerPokemon.hp);
  };

  runAway = () => {
    console.log("run away");
    alert("Couldn't get away");
    this.updateTurn();
    setTimeout(() => this.enemyTurn(), 100);
  };

  updateTurn = () => {
    console.log("switch turn");

    if (this.state.enemyHealth <= 0) {
      this.runPlayerWins();
    }
    if (this.state.playerHealth <= 0) {
      this.runEnemyWins();
    }

    this.setState({
      turn: !this.state.turn
    });
  };

  damageEnemyPokemon = dam => {
    console.log("in damage Enemy pokemon");
    // if (this.state.playerPokemon.type === this.state.enemyPokemon.type){
      this.setState({
      enemyHealth: this.state.enemyHealth - dam
    })
  // } else {
  //     this.setState({
  //       enemyHealth: this.state.enemyHealth - 20
  //     })
  //   }
  };

  damagePlayerPokemon = dam => {
    console.log("in damage player pokemon");
    // if (this.state.playerPokemon.type === this.state.enemyPokemon.type){
      this.setState({
      playerHealth: this.state.playerHealth - dam
    })
  // } else {
    //   this.setState({
    //     playerHealth: this.state.playerHealth - 20
    //   })
    // }
  };

  enemyTurn = () => {
    console.log("it's the enemies turn");
    const options = [
      this.enemyElementalAttack,
      this.enemyRegularAttack,
      this.enemyHeal
    ];
    const namedFunctions = ["Elemental Attack", "Regular Attack", "Heal"];
    console.log("enemy choices:", options);

    const rand = Math.floor(Math.random() * Math.floor(3));
    console.log("enemy chooses:", options[rand]);
    options[rand]();
    console.log(`${this.state.enemyPokemon.name} used ${namedFunctions[rand]}`);
  };

  render() {
    const style = {
      backgroundImage:
        'url("https://www.tynker.com/projects/images/08c85034c83474358721707acbed426823f1c4ef/background-scene---grass-battle-arena.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    return (
      <div className="game-body" style={style}>
        <div className="pokemon-game-containers">
          <EnemyPokemon
            pokemon={this.state.enemyPokemon}
            health={this.state.enemyHealth}
            updateTurn={this.updateTurn}
          />
          <PlayerPokemon
            pokemon={this.state.playerPokemon}
            health={this.state.playerHealth}
            elementalAttack={this.playerElementalAttack}
            regularAttack={this.playerRegularAttack}
            updateTurn={this.updateTurn}
            heal={this.heal}
            runAway={this.runAway}
            turn={this.state.turn}
            enemyTurn={this.enemyTurn}
          />
        </div>
      </div>
    );
  }
}

export default Arena;
