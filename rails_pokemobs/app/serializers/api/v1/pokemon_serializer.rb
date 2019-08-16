class Api::V1::PokemonSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :pokemon_type, :img_front, :img_back, :evolution, :hp, :id
end
