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


user_image_urls = {}
json.comments do
  @workouts.each do |workout|
    workout.comments.each do |comment|
      json.set! comment.id do
        json.partial!('api/comments/comment', comment: comment)
        user_image_urls[comment.user_id] = comment.user
      end
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

workout_user_ids = @workouts.map { |workout| workout.user.id }
user_image_urls.each do |k, v|
  next if workout_user_ids.include?(k)
  json.users do
    json.set! k do
      json.partial!('api/users/user', user: v)
    end
  end
end

json.workout_ids @workouts.map(&:id)
