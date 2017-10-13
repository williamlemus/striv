require 'rails_helper'

RSpec.describe Api::WorkoutsController, type: :controller do
  describe 'Workouts#index' do
    it 'has a 200 status code' do
      get :index, format: :json
      expect(response).to be_success
    end
  end
end
