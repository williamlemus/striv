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
#  description    :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#  route_id       :integer          not null
#

require 'test_helper'

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
