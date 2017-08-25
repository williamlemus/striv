import {combineReducers} from 'redux';
import SessionReducer from './session/session_reducer';
import ErrorReducer from './session/error_reducer';

export const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer
});

export default rootReducer;
