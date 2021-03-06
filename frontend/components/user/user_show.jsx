import React from 'react';
import WorkoutIndexContainer from '../workout/workout_index_container';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {

  componentDidMount(){
    this.props.getUser(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.props.getUser(newProps.match.params.id);
    }
  }

  render(){
    if(this.props.user){
      const user = this.props.user
      return(
        <div className='user-show-main'>
          <div className='user-edit'>
            {this.props.currentUser.id === this.props.user.id ? <span><Link to='/profile/edit'><i className="fa fa-pencil" aria-hidden="true"></i></Link></span> : ''}
          </div>

          <div className='user-profile-stats'>
            <section className='user-profile'>
              <img className='user-profile-image' src={this.props.user.image_url} />
              <ul>
                <li>
                  {this.props.user.first_name + ' ' + this.props.user.last_name}
                </li>
                { user.location ?
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      {this.props.user.location}
                    </span>
                  </li>

                  : ''

                }
                { this.props.currentUser.id === this.props.user.id && user.weight ?
                  <li>
                    Weight:
                    <span>
                      {this.props.user.weight}
                    </span>
                    kg
                  </li>
                  : ''
                }
                <li>
                  {this.props.user.bio}
                </li>
              </ul>
            </section>
            <div className='monthly-workouts'>
              Last 4 Weeks
              <h2>{user.monthlyWorkouts}</h2>
              <h6>Total Activities</h6>
            </div>
        </div>
          {
            user.totalWorkouts > 0 ?
            <WorkoutIndexContainer user_id={this.props.user.id} />
            : ''
          }
        </div>);
    } else {
      return(<div></div>);
    }
  }
}

export default UserShow;
