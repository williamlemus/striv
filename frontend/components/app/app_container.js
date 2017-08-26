import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from './App';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: Boolean(state.session.currentUser)
  });
};


export default withRouter(connect(mapStateToProps, null)(App));
