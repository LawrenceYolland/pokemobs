import React from "react";
import PokemonCard from "../components/PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonContainer extends React.Component {
  render() {
    
    const userPs = this.props.pokemon.filter(p =>
      this.props.userPokemon.includes(p.id)
    );
    const pokeData = userPs.map(p => (
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
          <br />
          <br />
          {pokeData}
        </Card.Group>
      </div>
    );
  }
}

export default PokemonContainer;
