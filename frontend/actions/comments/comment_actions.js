import * as CommentsAPI from '../../util/comment_api_util';
import {receiveErrors} from '../error_actions'

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const removeComment = comment => {
  return ({
    type: REMOVE_COMMENT,
    comment: comment
  });
};

export const deleteComment = comment => dispatch => {
  return CommentsAPI.deleteComment(comment)
    .then(comment => removeComment(comment), errors => receiveErrors(errors.responseJSON));
}
