
export const deleteComment = comment => {
  return $.ajax({
    method: 'DELETE',
    url: `api/workouts/${comment.workout_id}/comments/${comment.id}`
  })
};
