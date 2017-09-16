import { RECEIVE_WORKOUT, RECEIVE_ALL_WORKOUTS } from '../../../actions/workouts/workout_actions';
import { REMOVE_COMMENT, RECEIVE_COMMENT } from '../../../actions/comments/comment_actions';

export const WorkoutsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_WORKOUT:
      newState = Object.assign({}, state, {[action.workout.workout.id]: action.workout.workout});
      return newState;
    case RECEIVE_ALL_WORKOUTS:
      newState = {};
      if(action.workouts.workouts){
        newState = action.workouts.workouts;
      }
      newState.workout_ids = action.workouts.workout_ids;
      return newState;
    case RECEIVE_COMMENT:
      newState = Object.assign({}, state);
      newState[action.comment.workout_id].comment_ids.push(action.comment.id);
      return newState;
    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      const comments_array = newState[action.comment.workout_id].comment_ids;
      newState[action.comment.workout_id].comment_ids.splice(comments_array.indexOf(action.comment.id), 1);
      return newState;
    default:
      return state;
  }
};

export default WorkoutsReducer;
