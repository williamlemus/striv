import {connect} from 'react-redux';
import CommentsShow from './comments';

const mapStateToProps = (state, ownProps )=> {
  return({
    comments: state.entities.comments,
    users: state.entities.users,
    comment_ids: ownProps.comment_ids,
  })
};

export default connect(mapStateToProps, null)(CommentsShow);
