class Api::V1::UserPokemonSerializer
    include FastJsonapi::ObjectSerializer
    
    attributes :user_id, :pokemon_id, :xp, :hp

end
