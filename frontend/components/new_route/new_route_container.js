import {connect} from 'react-redux';
import NewRoute from './new_route';
import { newWorkout } from '../../actions/workouts/workout_actions'


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch) => ({
  newWorkout: (workout) => dispatch(newWorkout({workout: workout}))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRoute)
