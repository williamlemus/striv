import {connect} from 'react-redux';
import EditProfile from './edit_profile';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser
  });
};


export default connect(mapStateToProps, null)(EditProfile);
