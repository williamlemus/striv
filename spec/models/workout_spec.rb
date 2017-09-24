require 'rails_helper'

RSpec.describe Workout, type: :model do
  describe 'Validations' do
    subject { FactoryGirl.build(:workout) }
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:exercise) }
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:route) }
    it { should validate_numericality_of(:workout_time) }
    it 'should check that time is not in future' do
      expect(FactoryGirl.build(:workout, start_datetime: 1.day.from_now)).not_to be_valid
      expect(FactoryGirl.build(:workout, start_datetime: 1.day.ago)).to be_valid
    end
  end
end
