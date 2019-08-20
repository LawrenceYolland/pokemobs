class Api::V1::UserPokemonsController < ApplicationController

    def index
        render( { json: Api::V1::UserPokemonSerializer.new(UserPokemon.all) } )
    end

    def create
        UserPokemon.create(user_pokemon_params)
    end

    def update
        
    end

    private 
    def user_pokemon_params
        params.require(:user_pokemon).permit(:user_id, :pokemon_id, :hp, :xp, :captured)
    end

end
