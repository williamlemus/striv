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
  validates :title, :distance, :exercise, :workout_time, :start_datetime, :polyline, :user, presence: true
  belongs_to :user

end
