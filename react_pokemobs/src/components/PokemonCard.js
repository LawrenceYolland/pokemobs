import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  render() {
    const { name, sprites, stats } = this.props.pokemon;

    return (
      <Card>
        <div>
          <div className="image">
            <img src={sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
          <button onClick={() =>this.props.selectPokemon(this.props.pokemon)}>select this pokemon</button>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;