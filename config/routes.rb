Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :rooms, only: [:create, :show, :index]
    resources :messages, only: [:index]
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
  end

  mount ActionCable.server => '/cable'

  root "static_pages#root"
end
