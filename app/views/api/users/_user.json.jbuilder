json.extract!(user, :id, :username, :first_name, :last_name, :location, :weight, :bio )
json.image_url asset_path(user.image.url(:original))


total_distance = 0
user_workouts = user.workouts.includes(:route)
user_workouts.each do |workout|
  total_distance += workout.route.distance
end



monthly_workouts = user_workouts.where("start_datetime >= ?", 1.month.ago).includes(:route)

monthly_distance = 0
monthly_workouts.each do |workout|
  monthly_distance += workout.route.distance
end



json.totalDistance total_distance
json.totalWorkouts user.workouts.length
json.monthlyWorkouts monthly_workouts.length
json.monthlyDistance monthly_distance

route_ids = user.routes.map(&:id)
json.route_ids route_ids
