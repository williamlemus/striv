import {connect} from 'react-redux';
import NewRoute from './new_route';
import { newRoute } from '../../actions/routes/route_actions';
import {receiveErrors} from '../../actions/error_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.errors
});


const mapDispatchToProps = (dispatch) => ({
  newRoute: (route) => dispatch(newRoute({route: route})),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRoute)
