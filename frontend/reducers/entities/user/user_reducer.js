import { RECEIVE_USER } from '../../../actions/users/user_actions';


export const UsersReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case RECEIVE_USER:
      newState = Object.assign({}, state, {[action.user.id]: action.user});
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
