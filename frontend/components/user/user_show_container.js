import {connect} from 'react-redux';
import UserShow from './user_show';
import { getUser } from '../../actions/users/user_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[ownProps.match.params.id],
    currentUser: state.session.currentUser
  });

};

const mapDispatchToProps = dispatch => {
  return ({
    getUser: (userid) => dispatch(getUser(userid))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
