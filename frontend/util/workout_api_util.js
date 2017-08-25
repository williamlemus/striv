export const newWorkout = (workout) => {
  return $.ajax({
    method: 'POST',
    url: 'api/workouts',
    data: workout
  })
};
