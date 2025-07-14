class User < ApplicationRecord
  has_one_attached :avatar

  def save_image
    avatar.attach(io: File.open("app/assets/images/remember-pi/pi.png"),filename: "avatar.png")
    save
  end

  def self.save_images
    transaction do
      User.all.each do |user|
        user.save_image
      end
    end
  end

  def self.save_images_async
    SaveUserImagesJob.perform_later
  end

  def self.urls
    User.all.map do |user|
      user.avatar_url
    end
  end

  def avatar_url
    if avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_path(avatar, only_path: true)
    end
  end
end
