class User < ApplicationRecord
  has_secure_password
  has_many :user_pokemon
  has_many :pokemons, through: :user_pokemon
end
