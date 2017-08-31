import React from 'react';
import RoutesIndexItem from './route_index_item';
import UserStats from '../user/user_stats';
import {Link} from 'react-router-dom'

class RoutesIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {loaded_data: false};
  }

  componentDidMount(){
    if(this.props.user_id){
      this.props.getRoutes(this.props.user_id).then(() => this.setState({loaded_data: true}));
    } else {
      this.props.getRoutes().then(() => this.setState({loaded_data: true}));
    }
  }

  render(){
    if( !this.state.loaded_data){
      return null;
    } else if(this.props.routes.length <= 1){
      return( <h2>Add some <Link to='new-route'>routes</Link></h2>);
    } else {
      let user;
      let title = ''
      if(this.props.user_id){
        user = this.props.users[this.props.user_id];
        title = user.first_name + "'s"
      } else {
        user = this.props.currentUser;
        title = 'Your';
      }
      return(
        <div className='workout-index'>
          <div>
            <h1>{title} Routes</h1>
            <div className='route-feed'>
              {
                this.props.routes.map((route, idx) => {
                  return(
                    <RoutesIndexItem route={route} users={this.props.users} currentUser = {this.props.currentUser}  key={idx} />
                  )
                })
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RoutesIndex;
