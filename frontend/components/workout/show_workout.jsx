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
          <div id='map-container' ref={ map => this.mapNode = map}>
          </div>
        </section>
      );
    } else {
      return(<div>No workout found!</div>);
    }

  }
}


export default ShowWorkout;
