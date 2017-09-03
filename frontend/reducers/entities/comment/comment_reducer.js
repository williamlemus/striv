import { RECEIVE_WORKOUT, RECEIVE_ALL_WORKOUTS } from '../../../actions/workouts/workout_actions';


const CommentsReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type){
    case RECEIVE_ALL_WORKOUTS:
      if(action.workouts.comments){
        return action.workouts.comments;
      }
      return {};
    default:
      return state;
  }

};

export default CommentsReducer;
