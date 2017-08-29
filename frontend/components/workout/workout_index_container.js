import {connect} from 'react-redux';
import WorkoutIndex from './workout_index';
import {allWorkouts} from '../../reducers/selectors';
import {fetchAllWorkouts} from '../../actions/workouts/workout_actions';

const mapStateToProps = state => {
  return({
    workouts: allWorkouts(state),
    users: state.entities.users,
    routes: state.entities.routes
  });
};

const mapDispatchToProps = dispatch => {
  return({
    getAllWorkouts: () => dispatch(fetchAllWorkouts())
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex)
