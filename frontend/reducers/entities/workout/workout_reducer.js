import {RECEIVE_WORKOUT} from '../../../actions/workouts/workout_actions';

export const WorkoutsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_WORKOUT:
      newState = Object.assign({}, state, {[action.workout.id]: action.workout});
      return newState;
    default:
      return state;
  }
};

export default WorkoutsReducer;
