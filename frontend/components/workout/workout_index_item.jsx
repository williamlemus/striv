import React from 'react';
import { Link } from 'react-router-dom';


const WorkoutIndexItem = (props) => {
  // Will need to add user when I have user profile
  const user = props.users[props.workout.user_id];
  const route = props.routes[props.workout.route_id];
  if(props.workout instanceof Array){
    return null;
  } else {
    return(<div>
      <div>{user.first_name + ' ' + user.last_name}</div>
      <span className='workout-date'>
        {new Date(props.workout.start_datetime).toLocaleString()}
      </span>
      <ul>
        <li className='workout-index-title'>
          <Link to={'/workouts/' + props.workout.id}>{props.workout.title}</Link>
        </li>
        <li>
          {route.distance/1000}km
        </li>
      </ul>
      <br/>
    </div>);
  }
};

export default WorkoutIndexItem;
