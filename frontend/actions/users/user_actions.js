import * as UserAPI from '../../util/user_api_util';
import {RECEIVE_ERRORS, receiveErrors} from '../error_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => {
  return({
    type: RECEIVE_USER,
    user: user
  });
};


export const getUser = userid => dispatch => {
    return UserAPI.getUser(userid)
      .then(user => dispatch(receiveUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)));
}
