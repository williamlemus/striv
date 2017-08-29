import {connect} from 'react-redux';
import ShowWorkout from './show_workout';
import {getWorkout} from '../../actions/workouts/workout_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    workout: state.entities.workouts[ownProps.match.params.id],
    users: state.entities.users,
    routes: state.entities.routes
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getWorkout: (workoutid) => dispatch(getWorkout(workoutid))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowWorkout)
