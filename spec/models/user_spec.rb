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
    it { should have_many(:workouts).dependent(:destroy) }
    it { should have_many(:routes).dependent(:destroy) }
    it { should have_many(:comments).dependent(:destroy) }
  end

  describe '::generate_session_token' do
    it 'should generate session token' do
      expect(User.generate_session_token).not_to be_nil
    end
  end
end
