import { RECEIVE_USER } from '../../../actions/users/user_actions';
import { RECEIVE_ROUTE, RECEIVE_ROUTES } from '../../../actions/routes/route_actions';
import { RECEIVE_WORKOUT, RECEIVE_ALL_WORKOUTS } from '../../../actions/workouts/workout_actions';

export const UsersReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case RECEIVE_USER:
      newState = Object.assign({}, state, {[action.user.id]: action.user});
      return newState;
    case RECEIVE_ROUTE:
      newState = Object.assign({}, state, {[action.route.user.id]: action.route.user});
      return newState;
    case RECEIVE_ROUTES:
      newState = Object.assign({}, state, action.routes.users);
      return newState;
    case RECEIVE_ALL_WORKOUTS:
      newState = state;
      if(action.workouts.users){
        newState = action.workouts.users;
      }
      return newState;
    case RECEIVE_WORKOUT:
      newState = Object.assign({}, state, {[action.workout.workout.user_id]: action.user})
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
