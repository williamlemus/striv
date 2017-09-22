require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
  end
  describe 'Associations' do
    it { should have_many(:workouts) }
    it { should have_many(:routes) }
    it { should have_many(:comments) }
  end
end
