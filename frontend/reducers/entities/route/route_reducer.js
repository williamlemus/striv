import { RECEIVE_ROUTE } from '../../../actions/routes/route_actions';

export const RoutesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ROUTE:
      newState = Object.assign({}, state, {[action.route.id]: action.route});
      return newState;
    default:
      return state;
  }
};

export default RoutesReducer;
