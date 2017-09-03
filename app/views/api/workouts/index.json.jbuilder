json.workouts do
  @workouts.each do |workout|
    json.set! workout.id do
      json.partial!('api/workouts/workout', workout: workout)
      json.comment_ids workout.comments.map(&:id)
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

json.comments do
  @workouts.each do |workout|
    workout.comments.each do |comment|
      json.set! comment.id do
        json.partial!('api/comments/comment', comment: comment)
      end
    end
  end
end

json.workout_ids @workouts.map(&:id)
