import {combineReducers} from 'redux';
import SessionReducer from './session/session_reducer';
import ErrorReducer from './error/error_reducer';
import EntitiesReducer from './entities/entities_reducer';

export const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  entities: EntitiesReducer
});

export default rootReducer;
