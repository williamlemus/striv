import {connect} from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return({
    user: "state.session.users[ownProps.match.params.user.id]"
  });

};

export default connect(mapStateToProps, null)(UserShow);
