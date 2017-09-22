require 'rails_helper'

RSpec.describe User, type: :model do
  it "Should valiate first_name" do
    should validate_presence_of(:first_name)
  end
end
