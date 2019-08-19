class User < ApplicationRecord
  has_secure_password
  has_many :user_pokemon
  has_many :pokemons, through: :user_pokemon

  validates :username, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 3 }

end


