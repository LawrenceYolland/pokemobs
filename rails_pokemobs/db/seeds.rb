# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def build_pokemon
    range = 1..151
    objects = []
    range.each { |n|  
        pokemon = {}
        data = JSON.parse( RestClient.get("https://pokeapi.co/api/v2/pokemon/#{n}") )
        species = JSON.parse( RestClient.get(data["species"]["url"] ) ) 
        evo_from = species["evolves_from_species"]
        pokemon = {
            name: data["name"],
            pokemon_type: data["types"][-1]["type"]["name"],
            img_front: data["sprites"]["front_default"],
            img_back: data["sprites"]["back_default"],
            hp: data["stats"].find { |obj| obj["stat"]["name"] == "hp"}["base_stat"],
            # to get evolves to use a .find to match evolves from and self.name
            evolves_from: !evo_from.nil? ? evo_from["name"] : nil, 
        }
        objects << pokemon
    }
    objects
end

def build_user_pokemon
    range = 1..151
    objects = []
    range.each { |n|  
        user_pokemon = {}
        data = JSON.parse RestClient.get("https://pokeapi.co/api/v2/pokemon/#{n}")
        user_pokemon = {
            xp: 0,
            captured: false,
            hp: data["stats"].find { |obj| obj["stat"]["name"] == "hp"}["base_stat"],
            user_id: 1+rand(5),
            pokemon_id: 1+rand(151),
        }
        objects << user_pokemon
    }
    objects
end

def build_users 
    range = 1..5
    objects = []
    range.each { |n|  
        user = {
            username: "user #{n}", password: "password"
        }
        objects << user
    }
    objects
end



User.create!( [build_users] )
Pokemon.create!( [build_pokemon] )
UserPokemon.create!( [build_user_pokemon] )

