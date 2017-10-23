require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'User#show' do
    it 'assigns @user' do
      user = FactoryGirl.build(:user)
      user.save
      get :show, params: { id: user.id }, format: :json
      expect(response.content_type).to eq('application/json')
      expect(response).to be_success
    end
  end
end
