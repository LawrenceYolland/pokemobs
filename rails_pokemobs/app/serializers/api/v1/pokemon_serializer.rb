class Api::V1::PokemonSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :xp, :hp, :captured
end
