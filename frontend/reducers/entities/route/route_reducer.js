import { RECEIVE_ROUTE, RECEIVE_ROUTES } from '../../../actions/routes/route_actions';
import { RECEIVE_WORKOUT, RECEIVE_ALL_WORKOUTS } from '../../../actions/workouts/workout_actions';

export const RoutesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ROUTE:
      newState = Object.assign({}, state, {[action.route.route.id]: action.route.route});
      return newState;
    case RECEIVE_ROUTES:
      return action.routes.routes;
    case RECEIVE_WORKOUT:
      newState = Object.assign({}, state, {[action.workout.workout.route_id]: action.workout.route});
      return newState;
    case RECEIVE_ALL_WORKOUTS:
      if(action.workouts.routes){
        return action.workouts.routes
      }
      return state;
    default:
      return state;
  }
};

export default RoutesReducer;
