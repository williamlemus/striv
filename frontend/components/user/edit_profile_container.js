import {connect} from 'react-redux';
import EditProfile from './edit_profile';
import {updateUser} from '../../actions/users/user_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateUser: user => dispatch(updateUser({user: user}))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
