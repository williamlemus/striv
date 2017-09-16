import { RECEIVE_WORKOUT, RECEIVE_ALL_WORKOUTS } from '../../../actions/workouts/workout_actions';
import { REMOVE_COMMENT, RECEIVE_COMMENT } from '../../../actions/comments/comment_actions';


const CommentsReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type){
    case RECEIVE_ALL_WORKOUTS:
      if(action.workouts.comments){
        return action.workouts.comments;
      }
      return {};
    case RECEIVE_COMMENT:
      newState = Object.assign({}, state, {[action.comment.id]: action.comment});
      return newState;
    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      delete(newState[action.comment.id]);
      return newState;
    default:
      return state;
  }

};

export default CommentsReducer;
