class Api::V1::PokemonSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :pokemon_type, :img_front, :img_back, :evolves_from, :hp, :id
end
