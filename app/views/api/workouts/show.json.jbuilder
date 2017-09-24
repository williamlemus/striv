json.workout do
  json.partial!('api/workouts/workout', workout: @workout)
end

json.route do
  json.partial!('api/routes/route', route: @workout.route)
end

json.user do
  json.partial!('api/users/user', user: @workout.user)
end
