export const newWorkout = (workout) => {
  return $.ajax({
    method: 'POST',
    url: 'api/workouts',
    data: workout
  })
};


export const getWorkout = (workoutid) => {
  return $.ajax({
    method: 'GET',
    url: `api/workouts/${workoutid}`
  })
};

export const deleteWorkout = (workoutid) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/workouts/${workoutid}`
  })
}

export const getAllWorkouts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/workouts'
  });
};

//TODO: update workouts
