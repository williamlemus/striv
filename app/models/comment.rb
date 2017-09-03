class Comment < ApplicationRecord
  validates :workout, :user, :body, presence: true
  belongs_to :user
  belongs_to :workout
end
