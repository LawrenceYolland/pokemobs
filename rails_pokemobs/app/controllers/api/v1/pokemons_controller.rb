class Api::V1::PokemonsController < ApplicationController

    def index
        render( { json: PokemonSerializer.new(Pokemon.all) } )
    end

    def show
        render( {json: PokemonSerializer.new(Pokemon.find(params[:id])) } )
    end

end
