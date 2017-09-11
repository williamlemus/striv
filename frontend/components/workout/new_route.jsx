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
      }
    }

    componentDidMount(){
      this.props.clearErrors();
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
      travelMode: google.maps.TravelMode['WALKING'],
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
        this.props.clearErrors();
      } else {
        lineCoords.pop();
        this.props.receiveErrors(["Invalid point selected. Please try again"]);
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



   handleSubmit(e){
     e.preventDefault();
     let routeDetails = Object.assign({}, this.state);
     delete routeDetails.activeCreateButton;
     delete routeDetails.step;
     routeDetails.user_id = this.props.currentUser.id;
     routeDetails.distance = routeDetails.distance.value;
     //dispatch time!

     this.props.newRoute(routeDetails).then((res) =>{
       this.props.history.push(`/routes/${res.route.route.id}`);
     });

   }

   handleInput(e){
     let name = e.target.name
     let newVal = {};
     newVal[name] = e.target.value;
     this.setState(newVal);
   }

   errors(){
     if(this.props.errors.length > 0){
       return(
         <ul>
           {this.props.errors.map((err, idx) => <li className='error' key={idx}>{err}</li>)}
         </ul>
       );
     } else {
       return '';
     }
   }

  render() {
    let activeButtonStatus = this.toggleCreateButton();
    if(this.state.step === 1) {
      return(<div className='new-route-container'>

        <div id='create-route-button' className={activeButtonStatus} onClick={this.createRoute}>
          Create Route
        </div>
        <div id='map-container' ref={ map => this.mapNode = map}>
        </div>
        <div className='new-route-instructions'>
          <h3>Instructions:</h3>
          <ul>
            <li>
              Click on the map to set a starting point.
            </li>
            <li>
              Click again to set an ending point. You should now be able to create the route!
            </li>
            <li>
              If you want to add more points you can continue clicking on map.
              Each new click continue making a new route with the last clicked point as the end
            </li>
            {
              this.props.errors ? this.props.errors.map((el, idx)=>{
              return <li className='error' key={'errors' + idx}>{el}</li>
              }) : ''
            }
          </ul>

        </div>
      </div>);
    } else {
      return(<div className='new-workout-container'>
        {this.errors()}
        <form className='new-workout-form' onChange={this.handleInput}>
          <label htmlFor='title'>Title</label>
          <input id='title' name="title" />
          <input type='submit' className='enabled' onClick={this.handleSubmit} value='Create Route'/>
        </form>
      </div>);
    }
  }
}

export default withRouter(NewRoute);
