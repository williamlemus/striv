import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), error => receiveErrors(error));
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), error => receiveErrors(error));
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)), error => receiveErrors(error));
};
