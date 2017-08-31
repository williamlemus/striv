import {connect} from 'react-redux';
import RouteIndex from './route_index';
import {allWorkouts, allRoutes} from '../../reducers/selectors';
import {getRoutes, deleteRoute, updateRoute} from '../../actions/routes/route_actions';
import {receiveErrors} from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    routes: allRoutes(state),
    users: state.entities.users,
    user_id: ownProps.user_id,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
    getRoutes: () => dispatch(getRoutes()),
    updateRoute: (route) => dispatch(updateRoute({route: route})),
    deleteRoute: routeid => dispatch(deleteRoute(routeid)),
    clearErrors: () => dispatch(receiveErrors([]))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex)
