Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/validate', to: 'auth#validate_token'
      post "/login", to: "auth#create"
      get '/profile', to: 'users#profile'
      resources :pokemons, only: [ :index, :show ]
      resources :users, only: [ :show, :create, :index ]
      resources :user_pokemons, only: [ :create, :index ]
    end
  end
end
