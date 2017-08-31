import React from 'react';
import WorkoutIndexItem from './workout_index_item';
import UserStats from '../user/user_stats';
import {Link} from 'react-router-dom'

class WorkoutIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {loaded_data: false};
  }

  componentDidMount(){
    if(this.props.user_id){
      this.props.getWorkouts(this.props.user_id).then(() => this.setState({loaded_data: true}));
    } else {
      this.props.getAllWorkouts().then(() => this.setState({loaded_data: true}));
    }
  }

  render(){
    if( !this.state.loaded_data){
      return null;
    } else if(this.props.workouts.length <= 1){
      return( <h2>Add some <Link to='new-workout'>workouts</Link></h2>);
    } else {
      let user;
      if(this.props.user_id){
        user = this.props.users[this.props.user_id];
      } else {
        user = this.props.currentUser;
      }
      return(
        <div className='workout-index'>
          <div>
            <h1>Activity Feed</h1>
            <div className='workout-feed'>
              {
                this.props.workouts.map((workout, idx) => {
                  return(
                    <WorkoutIndexItem workout={workout} users={this.props.users} routes={this.props.routes}  key={idx} />
                  )
                })
              }
            </div>
          </div>
          {/*styles for user-stats are in user*/}
          <div className='user-stats-container'>
            <UserStats user={user} currentUser={this.props.currentUser} />
          </div>
        </div>
      );
    }
  }
}

export default WorkoutIndex;
