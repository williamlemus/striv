import {connect} from 'react-redux';
import CommentsShow from './comments';
import {deleteComment} from '../../actions/comments/comment_actions';

const mapStateToProps = (state, ownProps )=> {
  return({
    comments: state.entities.comments,
    users: state.entities.users,
    comment_ids: ownProps.comment_ids,
  })
};

const mapDispatchToProps = dispatch => {
  return({
    deleteComment: comment => dispatch(deleteComment(comment))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsShow);
