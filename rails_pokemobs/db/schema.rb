# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_16_154330) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pokemons", force: :cascade do |t|
    t.string "name"
    t.string "pokemon_type"
    t.string "img_front"
    t.string "img_back"
    t.integer "hp"
    t.string "evolution"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_pokemons", force: :cascade do |t|
    t.integer "xp"
    t.integer "hp"
    t.boolean "captured"
    t.bigint "user_id"
    t.bigint "pokemon_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pokemon_id"], name: "index_user_pokemons_on_pokemon_id"
    t.index ["user_id"], name: "index_user_pokemons_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_pokemons", "pokemons"
  add_foreign_key "user_pokemons", "users"
end
