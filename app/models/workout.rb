# == Schema Information
#
# Table name: workouts
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  distance       :float            not null
#  exercise       :string           not null
#  workout_time   :integer          not null
#  start_datetime :datetime         not null
#  polyline       :text             not null
#  description    :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#

class Workout < ApplicationRecord
  validates :title, :distance, :exercise, :polyline, :user, presence: true
  validates_numericality_of :workout_time, greater_than: 0
  validate :not_in_future
  belongs_to :user

  def not_in_future
    errors.add(:start_datetime, "cannot be in future") unless DateTime.now >start_datetime
  end

end
