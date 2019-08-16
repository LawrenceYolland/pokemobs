class Api::V1::PokemonsController < ApplicationController

    def index
        render( { json: PokemonSerializer.new(Pokemon.all) } )
    end

end
