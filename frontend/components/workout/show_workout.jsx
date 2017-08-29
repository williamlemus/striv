import React from 'react';
import {secondsToTime} from '../../util/converters'

class ShowWorkout extends React.Component{


  componentWillReceiveProps(newProps){
    if(this.props.match.url !== newProps.match.url){
      this.props.getWorkout(newProps.match.params.id)
      .then(
        () => this.initDrawing()
      );
    }
  }

  componentDidMount(){
    this.props.getWorkout(this.props.match.params.id)
    .then(
      () => this.initDrawing()
    );

  }

  initDrawing(){
    let route = this.props.routes[this.props.workout.route_id];
    let workoutPolyline = new google.maps.Polyline({
      path: google.maps.geometry.encoding.decodePath(route.polyline),
    });
    let bounds = new google.maps.LatLngBounds();
    workoutPolyline.getPath().forEach((l) => bounds.extend(l));

    const mapOptions = {
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    workoutPolyline.setMap(this.map);
    this.map.fitBounds(bounds);
  }


  render(){
    if(this.props.workout){
      const workout = this.props.workout;
      const route = this.props.routes[workout.route_id];
      return (
        <div>
          <section className='workout-detail'>
            <div className='workout-exercise'>
              <h2>{workout.exercise}</h2>
            </div>
            <div className='workout-info'>
              <div className='workout-title'>
                <h5 className='workout-date'>{new Date(workout.start_datetime).toLocaleString()}</h5>
                <h3>
                  {workout.title}
                </h3>
                <h4>
                  {workout.description}
                </h4>
              </div>
              <div className='workout-stats'>
                <ul>
                  <li>{route.distance/1000}km
                    <span className='workout-stats-label'>
                      Distance
                    </span>
                  </li>
                  <li>{secondsToTime(workout.workout_time)}
                    <span className='workout-stats-label'>
                      Time
                    </span>

                  </li>

                </ul>
              </div>
          </div>
          </section>
          <div id='map-container' className='workout-map' ref={ map => this.mapNode = map}>
          </div>
        </div>
      );
    } else {
      return(<div>No workout found!</div>);
    }

  }
}


export default ShowWorkout;
