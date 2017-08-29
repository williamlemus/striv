import { RECEIVE_WORKOUT, RECEIVE_ALL_WORKOUTS } from '../../../actions/workouts/workout_actions';

export const WorkoutsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_WORKOUT:

      newState = Object.assign({}, state, {[action.workout.id]: action.workout});
      return newState;
    case RECEIVE_ALL_WORKOUTS:
      newState = action.workouts.workouts;
      return newState;
    default:
      return state;
  }
};

export default WorkoutsReducer;
