import React from 'react';
import { Link } from 'react-router-dom';


const WorkoutIndexItem = (props) => {
  // Will need to add user when I have user profile
  return(<div>
    <span className='workout-date'>
      {new Date(props.workout.start_datetime).toLocaleString()}
    </span>
    <ul>
      <li className='workout-index-title'>
        <Link to={'/workouts/' + props.workout.id}>{props.workout.title}</Link>
      </li>
      <li>
        {props.workout.distance/1000}km
      </li>
    </ul>
    <br/>
  </div>);
};

export default WorkoutIndexItem;
