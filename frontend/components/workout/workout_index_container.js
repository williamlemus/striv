import {connect} from 'react-redux';
import WorkoutIndex from './workout_index';
import {allWorkouts} from '../../reducers/selectors';
import {fetchAllWorkouts, fetchUserWorkouts} from '../../actions/workouts/workout_actions';
import {addComment} from '../../actions/comments/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    workouts: allWorkouts(state),
    users: state.entities.users,
    routes: state.entities.routes,
    user_id: ownProps.user_id,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return({
    getAllWorkouts: () => dispatch(fetchAllWorkouts()),
    getWorkouts: userid => dispatch(fetchUserWorkouts(userid)),
    addComment: comment => dispatch(addComment({comment: comment}))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex)
