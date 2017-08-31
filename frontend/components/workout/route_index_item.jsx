import React from 'react';
import { Link } from 'react-router-dom';
import RouteMap from './route_map'

class RouteIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const user = this.props.users[this.props.route.user_id];
    const route = this.props.route
    if(this.props.workout instanceof Array){
      return null;
    } else {
      return(
        <div className='route-feed-item'>
          <span>
            <Link to={'/users/' + user.id}>
              {user.first_name + ' ' + user.last_name}
            </Link>
          </span>
          <span className='workout-date'>
            {new Date(route.created_at).toLocaleString()}
          </span>
          <span className='workout-index-title'>
            <Link to={'/routes/' + route.id}>{route.title}</Link>
          </span>
          <span className='workout-index-distance'>
            {route.distance/1000}km
          </span>
          <div>
            <RouteMap polyline={route.polyline} routeid={route.id} />
          </div>
          <br/>
          <div className='route-options'>
            {this.props.currentUser.id === this.props.route.user_id ? <span onClick={(e)=>this.props.toggleModal(e, this.props.route)} className='workout-edit' name='edit'><i className="fa fa-pencil" aria-hidden="true"></i></span> : ''}
            {this.props.currentUser.id === this.props.route.user_id ? <span onClick={(e)=>this.props.toggleModal(e, this.props.route)} className='workout-edit' name='delete'><i className="fa fa-trash" aria-hidden="true"></i></span> : ''}
          </div>
        </div>);
      }
  }
}

export default RouteIndexItem;
