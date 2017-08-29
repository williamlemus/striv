import * as RoutesAPI from '../../util/route_api_util';
import {RECEIVE_ERRORS, receiveErrors} from '../error_actions';

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';

export const receiveRoute = route => {
  return ({
    type: RECEIVE_ROUTE,
    route: route
  });
};

export const receiveRoutes = routes => {
  return({
  type: RECEIVE_ROUTES,
  routes: routes
});
}

export const newRoute = (route) => (dispatch) => {
    return RoutesAPI.newRoute(route)
      .then(route => dispatch(receiveRoute(route)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const getRoute = (routeid) => dispatch => {
  return RoutesAPI.getRoute(routeid)
    .then(route => dispatch(receiveRoute(route)), error => dispatch(receiveErrors(error.responseJSON)));
}

export const getRoutes = () => dispatch => {
  return RoutesAPI.getRoutes()
    .then(routes => dispatch(receiveRoutes(routes)), error => dispatch(receiveErrors(error.responseJSON)));
}
