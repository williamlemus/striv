
FactoryGirl.define do
  factory :workout do
    start_datetime 1.minute.ago
    title Faker.name
    exercise ['ride', 'run'].sample
    workout_time Random.rand(1..100_000)
    sequence :user do |n|
      FactoryGirl.build(:user)
    end
    sequence :route do |n|
      FactoryGirl.build(:route)
    end
  end
end
