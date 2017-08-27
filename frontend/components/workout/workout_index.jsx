import React from 'react';
import WorkoutIndexItem from './workout_index_item';

class WorkoutIndex extends React.Component {

  componentDidMount(){
    this.props.getAllWorkouts();
  }

  render(){
    return(

        <div className='workout-index'>
          <h1>Activity Feed</h1>
          <div>
            {
              this.props.workouts.map((workout, idx) => {
                return(
                  <WorkoutIndexItem workout={workout} key={idx} />
                )
              })
            }
          </div>
      </div>
      );
  }
}

export default WorkoutIndex;
