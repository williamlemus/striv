class Comment < ApplicationRecord
  validates :workout_id, :user_id, :body, presence: true
end
