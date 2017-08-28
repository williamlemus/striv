import { combineReducers } from 'redux';
import WorkoutsReducer from './workout/workout_reducer';
import UsersReducer from './user/user_reducer';

const EntitiesReducer = combineReducers({
  workouts: WorkoutsReducer,
  users: UsersReducer
})


export default EntitiesReducer;
