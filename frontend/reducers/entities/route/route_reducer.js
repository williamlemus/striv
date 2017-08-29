import { RECEIVE_ROUTE, RECEIVE_ROUTES } from '../../../actions/routes/route_actions';
import { RECEIVE_WORKOUT, RECEIVE_ALL_WORKOUTS } from '../../../actions/workouts/workout_actions';

export const RoutesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ROUTE:
      newState = Object.assign({}, state, {[action.route.id]: action.route});
      return newState;
    case RECEIVE_ROUTES:
      return action.routes;
    case RECEIVE_WORKOUT:
    newState = Object.assign({}, state, {[action.workout.route.id]: action.route});
    return newState;
    case RECEIVE_ALL_WORKOUTS:
      return action.workouts.routes;
    default:
      return state;
  }
};

export default RoutesReducer;
