import {connect} from 'react-redux';
import EditProfile from './edit_profile';
import {updateUser} from '../../actions/users/user_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    errors: state.errors.errors
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateUser: (formData, userid) => dispatch(updateUser(formData, userid))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
