import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: (ownProps.location.pathname === '/login' ? 'login' : 'signup')
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  return({
    processForm: (user) => ( ownProps.match.path === '/login' ? dispatch(login(user)) : dispatch(signup(user)) )
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
