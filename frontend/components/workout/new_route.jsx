import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class NewRoute extends React.Component{
    constructor(props){
      super(props);
      this.createRoute = this.createRoute.bind(this);
      this.createRouteButton = null;
      this.lineCoords = []; // list of coordinates user clicks
      this.toggleCreateButton = this.toggleCreateButton.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.state= {
        activeCreateButton: false,
        polyline: '',
        distance: {},
        step: 1,
        title: '',
        exercise: 'ride',
        hours: '',
        minutes: '',
        seconds: '',
        state_datetime: '',
        description: '',
      }
    }

    componentDidMount(){
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
        this.initDrawing();
      });
    }

    initDrawing(){
      const mapOptions = {
        center: { lat: this.position.coords.latitude, lng: this.position.coords.longitude },
        zoom: 13,
        disableDefaultUI: true,
        zoomControl: true
      };

      this.map = new google.maps.Map(this.mapNode, mapOptions);

      this.bikeLayer = new google.maps.BicyclingLayer();
      this.bikeLayer.setMap(this.map);

      this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = new google.maps.DirectionsRenderer({

      });
      this.directionsDisplay.setMap(this.map);


      let marker;
      google.maps.event.addListener(this.map, 'click', (event) =>{
        let that = this;
        that.lineCoords.push(event.latLng);
        if(that.lineCoords.length === 1){
          marker = new google.maps.Marker({
            position: event.latLng
          });
          marker.setMap(that.map);
        } else if(that.lineCoords.length === 2){
          marker.setMap(null);
        }
        if(that.lineCoords.length > 1) {

          that.calculateAndDisplayRoute(that.directionsService, that.directionsDisplay, that.lineCoords);
        }
      });
    }



  calculateAndDisplayRoute(directionsService, directionsDisplay, lineCoords) {
    let waypoints;
    if(lineCoords.length > 2){
      // make waypoints array
      waypoints = this.createWaypoints(lineCoords);
    }

    directionsService.route({
      origin: lineCoords[0],
      destination: lineCoords[lineCoords.length-1],
      travelMode: google.maps.TravelMode['BICYCLING'],
      avoidFerries: true,
      waypoints: waypoints,
    },
    (response, status) => {
      if(status === 'OK'){
        directionsDisplay.setDirections(response);
        let polyline = directionsDisplay.directions.routes[0].overview_polyline;
        let distanceObj = directionsDisplay.directions.routes[0].legs[0].distance;
        this.setState({
          activeCreateButton: true,
          polyline: this.directionsDisplay.directions.routes[0].overview_polyline,
          distance: this.directionsDisplay.directions.routes[0].legs[0].distance
        });
      } else {
        console.log('failed to display directions due to' + status);
      }
    });
  }

  createWaypoints(coords){
    const waypoints = [];
    for(let i = 1; i < coords.length-1; i++){
      waypoints.push({
        location: coords[i],
        stopover: false
      });
    }
    return waypoints;
  }

  toggleCreateButton(){
    return this.state.activeCreateButton ? 'enabled': 'disabled';
  }

  createRoute(){
    if(this.state.step === 1 && this.state.activeCreateButton){
      this.setState({step: 2});
    }
  }


  getCurrentDate() {
    let date =
date = new Date().toLocaleString("en-gb");
    let formattedDate = date.slice(6,10) + '-' + date.slice(3,5) + '-' + date.slice(0,2) + 'T' + date.slice(12,17);
    this.state.start_datetime = formattedDate;
    return formattedDate;
   }


   handleSubmit(e){
     e.preventDefault();
     let workoutDetails = Object.assign({}, this.state);
     delete workoutDetails.activeCreateButton;
     delete workoutDetails.step;
     workoutDetails.user_id = this.props.currentUser.id;
     workoutDetails.distance = workoutDetails.distance.value;
     //dispatch time!
     this.props.newWorkout(workoutDetails).then((res) =>{
       this.props.history.push(`/workouts/${res.workout.id}`);
     });

   }

   handleInput(e){
     let name = e.target.name
     let newVal = {};
     newVal[name] = e.target.value;
     this.setState(newVal);
   }


  render() {
    let activeButtonStatus = this.toggleCreateButton();
    if(this.state.step === 1) {
      return(<div>

        <div id='create-route-button' className={activeButtonStatus} onClick={this.createRoute}>
          Save
        </div>
        <div id='map-container' ref={ map => this.mapNode = map}>
        </div>

      </div>);
    } else {
      return(<div>
        <form className='new-workout-form' onChange={this.handleInput}>
          <label htmlFor='title'>Title</label>
          <input id='title' name="title" />
          <label htmlFor='exercise_type'>Exercise</label>
          <select id='exercise_type' name="exercise" defaultValue='ride'>
            <option value='ride'>Ride</option>
            <option value='run'>Run</option>
          </select>

          <fieldset>
            <legend>
              Duration
            </legend>
            <input type='number' name="hours" id='hours' defaultValue='0' max='999' />
            <label htmlFor='hours'>HH</label>
            <input type='number' name="minutes" id='min' defaultValue='0' max='59' />
            <label htmlFor='min'>MM</label>
            <input type='number' name="seconds" id='seconds' defaultValue='0' max='59'/>
            <label htmlFor='seconds'>ss</label>
          </fieldset>
          <label htmlFor='date'>
            Date
          </label>
          <input id='date' type='datetime-local' defaultValue={this.getCurrentDate()} name="start_datetime" />
          <label htmlFor='description'>Description</label>
          <textarea id='description' name='description'></textarea>
          <input type='submit' onClick={this.handleSubmit} value='Create Workout'/>
        </form>
      </div>);
    }
  }
}

export default withRouter(NewRoute);
