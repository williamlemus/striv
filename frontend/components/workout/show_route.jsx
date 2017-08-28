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
    let middle = Math.floor(routePolyline.latLngs.b[0].length /2);
    let middlePoint =  routePolyline.latLngs.b[0].b[middle].toJSON();
    const mapOptions = {
      center: middlePoint,
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    routePolyline.setMap(this.map);
  }


  render(){
    debugger
    if(this.props.route){
      const route = this.props.route;
      return (
        <div>
          <section className='route-detail'>

            <div className='route-info'>
              <div className='route-title'>

                <h3>
                  {route.title}
                </h3>
              </div>
              <div className='route-stats'>
                <ul>
                  <li>{route.distance/1000}km
                    <span className='route-stats-label'>
                      Distance
                    </span>
                  </li>
                </ul>
              </div>
          </div>
          </section>
          <div id='map-container' className='route-map' ref={ map => this.mapNode = map}>
          </div>
        </div>
      );
    } else {
      return(<div>No route found!</div>);
    }

  }
}


export default ShowRoute;
