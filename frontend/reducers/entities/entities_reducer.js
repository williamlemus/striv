import { combineReducers } from 'redux';
import WorkoutsReducer from './workout/workout_reducer';

const EntitiesReducer = combineReducers({
  workouts: WorkoutsReducer
})


export default EntitiesReducer;
