json.workouts do
  @workouts.each do |workout|
    json.set! workout.id do
      json.partial!('api/workouts/workout', workout: workout)
    end
  end
end

json.routes do
  @workouts.each do |workout|
    json.set! workout.route.id do
      json.partial!('api/routes/route', route: workout.route)
    end
  end
end

json.users do
  @workouts.each do |workout|
    json.set! workout.user.id do
      json.partial!('api/users/user', user: workout.user)
    end
  end
end

json.workout_ids @workouts.map(&:id)
