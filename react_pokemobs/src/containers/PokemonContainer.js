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
      />
    ));
    return (
      <div>
        <Card.Group itemsPerRow={6}>
          <h1>Pokemon Collection</h1>
          {pokeData}
        </Card.Group>
      </div>
    );
  }
}

export default PokemonContainer;
