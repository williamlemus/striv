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

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
