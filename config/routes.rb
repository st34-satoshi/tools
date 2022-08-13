Rails.application.routes.draw do
  get 'remember_pi/index'
  root "home#index"
end
