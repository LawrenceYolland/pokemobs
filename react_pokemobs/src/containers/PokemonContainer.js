import React from "react";
import PokemonCard from "../components/PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonContainer extends React.Component {
  render() {

    const pokeData = this.props.pokemon.map(p => (
      <PokemonCard
        key={p.id}
        pokemon={p}
        selectPokemon={this.props.selectPokemon}
        userPokemon={this.props.userPokemon}
        filterUserPokemon={this.props.filterUserPokemon}
      />
    ));
    return (
      <div className="pokemon-container">
        <h1>Pokemon Collection</h1>
        <p>choose a pokemon and then click go back..</p>
        <Card.Group itemsPerRow={6}>
          <br />
          <br />
          {pokeData}
        </Card.Group>
      </div>
    );
  }
}

export default PokemonContainer;
