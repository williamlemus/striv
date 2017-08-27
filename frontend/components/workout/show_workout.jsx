import React from 'react';

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
    let workoutPolyline = new google.maps.Polyline({
      path: google.maps.geometry.encoding.decodePath(this.props.workout.polyline),
    });
    let middle = Math.floor(workoutPolyline.latLngs.b[0].length /2);
    let middlePoint =  workoutPolyline.latLngs.b[0].b[middle].toJSON();
    const mapOptions = {
      center: middlePoint,
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    workoutPolyline.setMap(this.map);
  }


  render(){
    if(this.props.workout){
      const workout = this.props.workout;
      return (
        <div>
          <section className='workout-detail'>
            <div className='workout-exercise'>
              <h2>{workout.exercise}</h2>
            </div>
            <div className='workout-info'>
              <div className='workout-title'>
                <h5>{new Date(workout.start_datetime).toLocaleString()}</h5>
                <h3>
                  {workout.title}
                </h3>
                <h4>
                  {workout.description}
                </h4>
              </div>
              <div className='workout-stats'>
                <ul>
                  <li>{workout.distance/1000}km
                    <span className='workout-stats-label'>
                      Distance
                    </span>
                  </li>
                  {/* need function to make time into HH:MM:ss*/}
                  <li>{workout.workout_time/60} min
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
