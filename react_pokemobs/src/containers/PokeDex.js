import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokemon from "../components/Pokemon";

class PokeDex extends Component {

  render() {
    return (
      <div className="pokedex-menu">
        <Pokemon />
        <Link to="/arena">Arena</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/pokecentre">PokeCentre</Link>
        <button onClick={this.props.logOut}>Log Out</button>
      </div>
    );
  }
}

export default PokeDex;
