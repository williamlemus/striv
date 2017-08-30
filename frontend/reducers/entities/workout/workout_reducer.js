import { RECEIVE_WORKOUT, RECEIVE_ALL_WORKOUTS } from '../../../actions/workouts/workout_actions';

export const WorkoutsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_WORKOUT:
      newState = Object.assign({}, state, {[action.workout.workout.id]: action.workout.workout});
      return newState;
    case RECEIVE_ALL_WORKOUTS:
      newState = {}
      if(action.workouts.workouts){
        newState = action.workouts.workouts;
      }
      newState.workout_ids = action.workouts.workout_ids;
      return newState;
    default:
      return state;
  }
};

export default WorkoutsReducer;
