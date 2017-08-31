import React from 'react';

class ShowRoute extends React.Component{


  componentWillReceiveProps(newProps){
    if(this.props.match.url !== newProps.match.url){
      this.props.getRoute(newProps.match.params.id)
      .then(
        () => this.initDrawing()
      );
    }
  }

  componentDidMount(){
    this.props.getRoute(this.props.match.params.id)
    .then(
      () => this.initDrawing()
    );

  }

  initDrawing(){
    let routePolyline = new google.maps.Polyline({
      path: google.maps.geometry.encoding.decodePath(this.props.route.polyline),
    });
    let bounds = new google.maps.LatLngBounds();
    routePolyline.getPath().forEach((l) => bounds.extend(l));

    const mapOptions = {
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    routePolyline.setMap(this.map);
    this.map.fitBounds(bounds);
  }


  render(){
    if(this.props.route){
      const route = this.props.route;
      const user = this.props.users[route.user_id]
      return (
        <div>
          <section className='route-detail'>

            <h2>
              {route.title}
            </h2>
            <div className='route-info'>
              <div className='route-title'>

              </div>
              <div id='map-container' className='route-map' ref={ map => this.mapNode = map}>
              </div>
              <div className='route-stats'>
                <img className='route-user-img' src={user.image_url}/>
                  <div>
                    <div className='route-user-name'>{user.first_name + ' ' + user.last_name}</div>
                    <div className='route-create-date'>Created on {' ' +  new Date(route.created_at).toDateString()} </div>
                    <ul>
                      <li>{route.distance/1000}km
                        <span className='workout-stats-label'>
                          Distance
                        </span>
                      </li>
                    </ul>
                </div>
              </div>
          </div>
          </section>

        </div>
      );
    } else {
      return(<div>No route found!</div>);
    }

  }
}


export default ShowRoute;
