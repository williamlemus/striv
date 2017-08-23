import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup, receiveErrors} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: (ownProps.location.pathname === '/login' ? 'login' : 'signup')
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (user) => ( ownProps.match.path === '/login' ? dispatch(login(user)) : dispatch(signup(user)) ),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
