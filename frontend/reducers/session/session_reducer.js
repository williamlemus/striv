import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../../actions/session_actions';
import {RECEIVE_ROUTES} from '../../actions/routes/route_actions';
import {RECEIVE_USER} from '../../actions/users/user_actions';
const nullUser = {
  currentUser: null,
  errors: []
};

export const SessionReducer = (state = nullUser, action) =>{
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: []};
    case RECEIVE_ROUTES:
      newState = Object.assign({}, state);
      newState.currentUser.route_ids = Object.keys(action.routes).map((key)=> key);
      return newState;
    case RECEIVE_USER:
      if(action.user.id === state.currentUser.id){
        return {currentUser: action.user, errors: []};
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default SessionReducer;
