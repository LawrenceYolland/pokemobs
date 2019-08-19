Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post "/login", to: "auth#create"
      get '/profile', to: 'users#profile'
      get '/validate', to: 'auth#validate_token'
      resources :pokemons, only: [ :index, :show ]
      resources :users, only: [ :show, :create, :index ]
    end
  end
end
