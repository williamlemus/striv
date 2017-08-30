import {connect} from 'react-redux';
import ShowWorkout from './show_workout';
import {getWorkout, updateWorkout} from '../../actions/workouts/workout_actions';
import {receiveErrors} from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    workout: state.entities.workouts[ownProps.match.params.id],
    users: state.entities.users,
    routes: state.entities.routes,
    currentUser: state.session.currentUser,
    errors: state.errors.errors
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getWorkout: (workoutid) => dispatch(getWorkout(workoutid)),
    clearErrors: () => dispatch(receiveErrors([])),
    updateWorkout: workout => dispatch(updateWorkout({workout: workout}))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowWorkout)
