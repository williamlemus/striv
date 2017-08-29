import React from 'react';
import { Link } from 'react-router-dom';


const WorkoutIndexItem = (props) => {
  // Will need to add user when I have user profile
  const user = props.users[props.workout.user_id];
  const route = props.routes[props.workout.route_id];
  if(props.workout instanceof Array){
    return null;
  } else {
    return(
      <div className='workout-feed-item'>
        <div className='workout-pic-container'>
          <Link to={'/users/' + user.id}>
            <img className='workout-feed-img' src={user.image_url} />
          </Link>
        </div>
        <span>
          <Link to={'/users/' + user.id}>
            {user.first_name + ' ' + user.last_name}
          </Link>
        </span>
      <span className='workout-date'>
        {new Date(props.workout.start_datetime).toLocaleString()}
      </span>

        <span className='workout-index-title'>
          <Link to={'/workouts/' + props.workout.id}>{props.workout.title}</Link>
        </span>
        <span className='workout-index-distance'>
          {route.distance/1000}km
        </span>

      <br/>
    </div>);
  }
};

export default WorkoutIndexItem;
