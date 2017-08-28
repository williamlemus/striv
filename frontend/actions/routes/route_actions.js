import * as RoutesAPI from '../../util/route_api_util';
import {RECEIVE_ERRORS, receiveErrors} from '../error_actions';

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';

export const receiveRoute = route => {
  return ({
    type: RECEIVE_ROUTE,
    route: route
  });
};


export const newRoute = (route) => (dispatch) => {
    return RoutesAPI.newRoute(route)
      .then(route => dispatch(receiveRoute(route)), error => dispatch(receiveErrors(error.responseJSON)));
};

export const getRoute = (routeid) => dispatch => {
  return RoutesAPI.getRoute(routeid)
    .then(route => dispatch(receiveRoute(route)), error => dispatch(receiveErrors(error.responseJSON)));
}
