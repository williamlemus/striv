import { combineReducers } from 'redux';
import WorkoutsReducer from './workout/workout_reducer';
import RoutesReducer from './route/route_reducer';
import UsersReducer from './user/user_reducer';

const EntitiesReducer = combineReducers({
  workouts: WorkoutsReducer,
  routes: RoutesReducer,
  users: UsersReducer
})


export default EntitiesReducer;
