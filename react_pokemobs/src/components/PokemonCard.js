import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  render() {
    const pokeCard = (
      <div className={this.props.pokemon.pokemon_type}>
        <div className="image">
          <img
            src={this.props.pokemon.img_front}
            alt={this.props.pokemon.name}
          />
        </div>
        <div className="content">
          <div className="header">{this.props.pokemon.name.toUpperCase()}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {this.props.pokemon.hp}
          </span>
          <br />
          <span>{this.props.pokemon.pokemon_type}</span>
        </div>
        <button className="poke-selector" onClick={() => this.props.selectPokemon(this.props.pokemon)}>
          select this pokemon
        </button>
      </div>
    );

    const cardBack = (
      <img
        id="card_back"
        alt="card back"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_1024,h_1420,strp/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA"
      />
    );
    return (
      <Card id="pokecard">
        {!!this.props.filterUserPokemon.find(
          p => p.pokemon_id === this.props.pokemon.id
        )
          ? pokeCard
          // switch second argument to "cardBack" for only user's pokemon shown
          : pokeCard}
      </Card>
    );
  }
}

export default PokemonCard;
