class CreateUserPokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :user_pokemons do |t|
      t.integer :xp
      t.integer :hp
      t.boolean :captured
      t.references :user, foreign_key: true
      t.references :pokemon, foreign_key: true

      t.timestamps
    end
  end
end
