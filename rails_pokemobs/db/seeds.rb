# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# require "pry"

def get_pokemon
    # require 'rest-client'
    range = 1..151
    objects = []
    range.each { |n|  
        pokemon = {}
        data = JSON.parse(RestClient.get("https://pokeapi.co/api/v2/pokemon/#{n}"))
        species = JSON.parse(RestClient.get(data["species"]["url"])) 
        evo_from = species["evolves_from_species"]
        
        pokemon = {
            name: data["name"],
            pokemon_type: data["types"][-1]["type"]["name"],
            img_front: data["sprites"]["front_default"],
            img_back: data["sprites"]["back_default"],
            hp: data["stats"].find { |obj| obj["stat"]["name"] == "hp"}["base_stat"],
            evolution: !evo_from.nil? ? evo_from["name"] : nil,
            
        }
        objects << pokemon
    }
    objects
end

pokemon = get_pokemon


User.create!({username: "lawrence", password: "password"})
Pokemon.create!([pokemon])

