import { combineReducers } from 'redux';
import WorkoutsReducer from './workout/workout_reducer';
import RoutesReducer from './route/route_reducer';
import UsersReducer from './user/user_reducer';
import CommentsReducer from './comment/comment_reducer';

const EntitiesReducer = combineReducers({
  workouts: WorkoutsReducer,
  routes: RoutesReducer,
  users: UsersReducer,
  comments: CommentsReducer
})


export default EntitiesReducer;
