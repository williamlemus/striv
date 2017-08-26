import * as WorkoutAPI from '../../util/workout_api_util';

export const RECEIVE_ALL_WORKOUTS = 'RECEIVE_ALL_WORKOUTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';

export const receiveAllWorkouts = (workouts) => {
  return ({
    type: RECEIVE_ALL_WORKOUTS,
    workouts: workouts
  });
};

export const receiveWorkout = (workout) => {
  return ({
    type: RECEIVE_WORKOUT,
    workout: workout
  })
};

export const receiveErrors = (error) => {
  type: RECEIVE_ERRORS,
  error
}


export const newWorkout = (workout) => (dispatch) => {
    return WorkoutAPI.newWorkout(workout)
      .then(workout => dispatch(receiveWorkout(workout)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const getWorkout = (workoutid) => dispatch => {
  return WorkoutAPI.getWorkout(workoutid)
    .then(workout => dispatch(receiveWorkout(workout)), error => dispatch(receiveErrors(error.responseJSON)));
}
