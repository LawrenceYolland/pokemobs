import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PokemonContainer from "./PokemonContainer";
import Arena from "../components/Arena";
import PokeCentre from "../components/PokeCentre";
import API from "../adapters/API";
import PokemonSelector from "../components/PokemonSelector";

class PokeDex extends Component {
  state = {
    menuToggle: 0,
    selectedPokemon: ""
  };

  filterUserPokemon = () => {
    return this.props.allUsersPokemon.filter(
      p => p.user_id === this.props.user.user_id
    );
  };

  menuToggle = () => {
    this.setState({ menuToggle: 0 });
  };

  selectPokemon = selectedPokemon => {
    // API.addUserPokemon(this.props.user.user_id, selectedPokemon);,
    this.setState({
      selectedPokemon
    });
  };

  render() {
    const style = {
      backgroundImage:
        'url("http://brezomadrid.es/Codepen-resources/img/pokedex.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    let view;

    if (this.state.menuToggle === 1) {
      view = (
        <Arena
          pokemon={this.props.pokemon}
          playerPokemon={this.state.selectedPokemon}
          menuToggle={this.menuToggle}
        />
      );
    } else if (this.state.menuToggle === 2) {
      view = (
        <PokemonContainer
          className="pokemon-container"
          pokemon={this.props.pokemon}
          user={this.props.user}
          userPokemon={this.props.userPokemon}
          selectPokemon={this.selectPokemon}
          filterUserPokemon={this.filterUserPokemon()}
        />
      );
    } else if (this.state.menuToggle === 3) {
      view = <PokeCentre />;
    } else {
      view = (
        <div className="selector-container">
          <h1>Pokedex</h1>
          <p>styling absent ...</p>

          <a
            className="player-choices"
            href="#"
            onClick={() => this.setState({ menuToggle: 1 })}
          >
            <h3>Battle Your Pokemon</h3>
          </a>

          <a
            className="player-choices"
            href="#"
            onClick={() => this.setState({ menuToggle: 2 })}
          >
            <h3>Choose your Pokemon</h3>
          </a>
        </div>
      );
    }

    return (
      <div>
        <div className="back-log-out">
          <button onClick={() => this.menuToggle()}>Back</button>
          <button onClick={() => this.props.logOut()}>Log Out</button>
        </div>
        <div>
          {this.filterUserPokemon().length !== 0 ||
          this.props.userPokemon.length !== 0 ? (
            view
          ) : (
            <PokemonSelector
              pokemon={this.props.pokemon}
              user={this.props.user}
              setFirstPokemon={this.props.setFirstPokemon}
            />
          )}
        </div>
      </div>
    );
  }
}

export default PokeDex;
