Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :rooms, only: [:create, :show, :index]
    resources :messages, only: [:index]
  end

  mount ActionCable.server => '/cable'

  root "static_pages#root"
end
