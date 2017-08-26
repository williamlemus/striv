import React from 'react';

class ShowWorkout extends React.Component{

  componentDidMount(){
    this.props.getWorkout(this.props.match.params.id);
  }

  render(){
    if(this.props.workout){
      const workout = this.props.workout;
      return (
        <section className='workout-detail'>
          <h2>{workout.title}</h2>
          <h3>
            {workout.description}
          </h3>
          <ul>
            <li>{workout.distance/1000}km</li>
            {/* need function to make time into HH:MM:ss*/}
            <li>{workout.workout_time/60}min</li>
            <li>{workout.type}</li>
            <li>{workout.start_datetime}</li>
          </ul>

        </section>
      );
    } else {
      return(<div>No workout found!</div>);
    }

  }
}


export default ShowWorkout;
