import React from 'react';
import WorkoutIndexItem from './workout_index_item';
import {Link} from 'react-router-dom'

class WorkoutIndex extends React.Component {

  componentDidMount(){
    this.props.getAllWorkouts();
  }

  render(){

    if(this.props.workouts.length <= 1){
      return( <h2>Add some <Link to='new-workout'>workouts</Link></h2>);
    } else {

      return(

        <div className='workout-index'>
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
      );
    }
  }
}

export default WorkoutIndex;
