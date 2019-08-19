class Api::V1::PokemonsController < ApplicationController

    def index
        render( { json: Api::V1::PokemonSerializer.new(Pokemon.all) } )
    end

    def show
        render( {json: Api::V1::PokemonSerializer.new(Pokemon.find(params[:id])) } )
    end

end
