import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../../actions/session_actions';
import {RECEIVE_ROUTES} from '../../actions/routes/route_actions';
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
    default:
      return state;
  }
};

export default SessionReducer;
