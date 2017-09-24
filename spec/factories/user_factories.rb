FactoryGirl.define do
  factory :user do
    first_name Faker.name
    last_name Faker.name
  end
end
