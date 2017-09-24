require 'rails_helper'

RSpec.describe Workout, type: :model do
  subject { FactoryGirl.build(:workout) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:exercise) }
  it { should validate_presence_of(:user) }
  it { should validate_presence_of(:route) }
end
