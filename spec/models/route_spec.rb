require 'rails_helper'

RSpec.describe Route, type: :model do
  describe 'Validations' do
    it { should validate_presence_of(:polyline) }
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:distance) }
  end

  describe 'Associations' do
    it { should belong_to(:user) }
    it { should have_many(:workouts).dependent(:destroy) }
  end
end
