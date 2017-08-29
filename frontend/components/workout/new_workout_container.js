import {connect} from 'react-redux';
import {newWorkout} from '../../actions/workouts/workout_actions';
import {getRoutes} from '../../actions/routes/route_actions';
import {receiveErrors} from '../../actions/error_actions';
import NewWorkout from './new_workout';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  routes: state.entities.routes,
  errors: state.errors.errors
});

const mapDispatchToProps = dispatch => {
    return ({
      newWorkout: (workout) => dispatch(newWorkout({workout: workout})),
      getRoutes: () => dispatch(getRoutes()),
      clearErrors: () => dispatch(receiveErrors([]))
    });
};




export default connect(mapStateToProps, mapDispatchToProps)(NewWorkout)
