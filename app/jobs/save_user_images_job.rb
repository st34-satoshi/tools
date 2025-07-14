class SaveUserImagesJob < ApplicationJob
  queue_as :default

  def perform
    User.save_images
  end
end 