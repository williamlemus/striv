# == Schema Information
#
# Table name: routes
#
#  id         :integer          not null, primary key
#  polyline   :text             not null
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  distance   :float            not null
#

class Route < ApplicationRecord
  validates :polyline, :user, :title, :distance, presence: true
  belongs_to :user
  has_many :workouts
end
