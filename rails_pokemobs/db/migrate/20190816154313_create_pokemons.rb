class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :pokemon_type
      t.string :img_front
      t.string :img_back
      t.integer :hp
      t.string :evolves_from

      t.timestamps
    end
  end
end
