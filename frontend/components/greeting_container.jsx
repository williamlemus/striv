import {connect} from 'react-redux';
import {login, logout} from '../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
