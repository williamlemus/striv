
export const deleteComment = comment => {
  return $.ajax({
    method: 'DELETE',
    url: `api/workouts/${comment.workout_id}/comments/${comment.id}`
  })
};

export const addComment = comment => {
  return $.ajax({
    method: 'POST',
    url: `api/workouts/${comment.workout_id}/comments/`,
    data: comment
  });
}
