import * as WorkoutAPI from '../../util/workout_api_util';
import {RECEIVE_ERRORS, receiveErrors} from '../error_actions';

export const RECEIVE_ALL_WORKOUTS = 'RECEIVE_ALL_WORKOUTS';
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

export const fetchUserWorkouts = userid => dispatch => {
  return WorkoutAPI.getUserWorkouts(userid)
    .then(workouts => dispatch(receiveAllWorkouts(workouts)), errors => dispatch(errors.responseJSON));
};

export const fetchAllWorkouts = () => (dispatch) => {
  return WorkoutAPI.getAllWorkouts()
    .then((workouts) => dispatch(receiveAllWorkouts(workouts)),
      error => dispatch(receiveErrors(error.responseJSON)));
};


export const newWorkout = (workout) => (dispatch) => {
    return WorkoutAPI.newWorkout(workout)
      .then(workout => dispatch(receiveWorkout(workout)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const getWorkout = (workoutid) => dispatch => {
  return WorkoutAPI.getWorkout(workoutid)
    .then(workout => dispatch(receiveWorkout(workout)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const updateWorkout = workout => dispatch => {
  return WorkoutAPI.updateWorkout(workout)
    .then(workout => dispatch(receiveWorkout(workout)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const deleteWorkout = workoutid => dispatch => {
  return WorkoutAPI.deleteWorkout(workoutid)
    .then(workout => dispatch(receiveWorkout(workout)), error => dispatch(receiveErrors(error.responseJSON)));
};
