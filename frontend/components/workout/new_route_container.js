import {connect} from 'react-redux';
import NewRoute from './new_route';
import { newWorkout } from '../../actions/workouts/workout_actions';
import {receiveErrors} from '../../actions/error_actions';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.errors
});


const mapDispatchToProps = (dispatch) => ({
  newWorkout: (workout) => dispatch(newWorkout({workout: workout})),
  clearErrors: () => dispatch(receiveErrors([]))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRoute)
