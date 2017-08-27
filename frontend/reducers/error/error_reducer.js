import {RECEIVE_ERRORS} from '../../actions/error_actions';

const ErrorReducer = (state = {errors: []}, action) =>{
  switch(action.type){
    case RECEIVE_ERRORS:
      return {errors: action.errors}
    default:
      return state;
  }
};

export default ErrorReducer;
