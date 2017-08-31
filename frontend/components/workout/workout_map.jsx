import React from 'react';


const WorkoutMap = props => {
  let mapSrc = 'https://maps.googleapis.com/maps/api/staticmap?style=feature:administrative%7Cvisibility:off&style=feature:road%7Cvisibility:simplified&style=feature:road.highway.controlled_access%7Cvisibility:off&scale=2&size=125x65&path=weight:2%7Ccolor:0x000000%7Cenc:'
  mapSrc += props.polyline + '&key=AIzaSyA2bhqcE3BfEwbAQo1dn51jdh3H3ZKW6jQ';
  return(
    <div>

      <img src={mapSrc}/>
    </div>
  )
};


export default WorkoutMap;
