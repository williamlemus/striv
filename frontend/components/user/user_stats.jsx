import React from 'react';


const UserStats = props => {
  return(
    <div className='user-stats'>
      <h2>{props.user.id === props.currentUser.id ? 'Your' : 'User'} Stats</h2>
      <ul>
        <li>
          Monthly Distance: {props.user.monthlyDistance/1000}km
        </li>
        <li>
          Monthly Workouts: {props.user.monthlyWorkouts}
        </li>
        <li>
          Total Distance: {props.user.totalDistance/1000}km
        </li>
        <li>
          Total workouts: {props.user.totalWorkouts}

        </li>
      </ul>
    </div>);
};


export default UserStats;
