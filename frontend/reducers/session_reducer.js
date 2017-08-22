import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: []
};

export const SessionReducer = (state = nullUser, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: [action.errors]});
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: []};
    default:
      return state;
  }
};

export default SessionReducer;
