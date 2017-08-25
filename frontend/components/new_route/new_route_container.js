import {connect} from 'react-redux';
import NewRoute from './new_route';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(NewRoute)
