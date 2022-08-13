Rails.application.routes.draw do
  root "home#index"
  get 'remember_pi', to: "remember_pi#index"
end
