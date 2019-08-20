import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  render() {
    const { name, pokemon_type, img_front, hp } = this.props.pokemon;

    return (
      <Card>
        <div>
          <div className="image">
            <img src={img_front} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
            <br />
            <span>
              {pokemon_type}
            </span>
          </div>
          <button onClick={() =>this.props.selectPokemon(this.props.pokemon)}>select this pokemon</button>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
