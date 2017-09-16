import * as CommentsAPI from '../../util/comment_api_util';
import {receiveErrors} from '../error_actions'

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const removeComment = comment => {
  return ({
    type: REMOVE_COMMENT,
    comment: comment
  });
};

export const receiveComment = comment => {
  return ({
    type: RECEIVE_COMMENT,
    comment: comment
  });
};


export const deleteComment = comment => dispatch => {
  return CommentsAPI.deleteComment(comment)
    .then(comment => dispatch(removeComment(comment)), errors => receiveErrors(errors.responseJSON));
}

export const addComment = comment => dispatch => {
  return CommentsAPI.addComment(comment)
    .then(comment => dispatch(receiveComment(comment)), errors => receiveErrors(errors.responseJSON));
}
