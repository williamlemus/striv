Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update] do
      resources :workouts, only: [:index]
    end
    resources :workouts, except: [:new, :edit] do
      resources :comments, only: [:create, :update, :destroy]
    end

    resources :routes, except: [:new, :edit]
  end

end
