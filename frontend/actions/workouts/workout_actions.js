import * as WorkoutAPI from '../../uti/workout_api_util';

export const RECEIVE_ALL_WORKOUTS = 'RECEIVE_ALL_WORKOUTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export consrt RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';

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


export const addWorkout = (workout) => (dispatch) => {
    return WorkoutAPI.addWorkout(workout)
      .then(workout => dispatch(receiveWorkout(workout)), error => dispatch(receiveErrors(error.responseJSON));
};
