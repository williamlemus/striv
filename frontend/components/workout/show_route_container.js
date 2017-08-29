import {connect} from 'react-redux';
import ShowRoute from './show_route';
import {getRoute} from '../../actions/routes/route_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    route: state.entities.routes[ownProps.match.params.id],
    users: state.entities.users
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getRoute: (routeid) => dispatch(getRoute(routeid))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowRoute)
