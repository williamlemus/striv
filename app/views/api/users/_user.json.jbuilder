json.extract!(user, :id, :username, :first_name, :last_name, :location, :weight, :bio )
json.image_url asset_path(user.image.url(:original))

totalDistance = 0
user.workouts.each do |workout|
  totalDistance+= workout.route.distance
end



monthly_workouts = user.workouts.where("start_datetime >= ?", 1.month.ago).includes(:route)

monthly_distance = 0
monthly_workouts.each do |workout|
  monthly_distance += workout.route.distance
end



json.totalDistance totalDistance
json.totalWorkouts user.workouts.length
json.monthlyWorkouts monthly_workouts.length
json.monthlyDistance monthly_distance

route_ids = user.routes.map(&:id)
json.route_ids route_ids
