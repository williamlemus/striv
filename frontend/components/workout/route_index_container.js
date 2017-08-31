import {connect} from 'react-redux';
import RouteIndex from './route_index';
import {allWorkouts, allRoutes} from '../../reducers/selectors';
import {getRoutes} from '../../actions/routes/route_actions';

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

  })
};


export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex)
