import React from "react";
import PokemonCard from "../components/PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonContainer extends React.Component {
  render() {
    
    // const userPs = this.props.pokemon.filter(p =>
    //   this.props.userPokemon.includes(p.id)
    // );
    const pokeData = this.props.pokemon.map(p => (
      <PokemonCard
        key={p.id}
        pokemon={p}
        selectPokemon={this.props.selectPokemon}
        userPokemon={this.props.userPokemon}
      />
    ));
    return (
      <div>
        <h1>Pokemon Collection</h1>
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
