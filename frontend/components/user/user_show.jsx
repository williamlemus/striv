import React from 'react';

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
      return(
        <div className='user-show-main'>
          <section className='user-profile'>
            <img className='user-profile-image' src={this.props.user.image_url} />
            <ul>
              <li>
                {this.props.user.first_name + ' ' + this.props.user.last_name}
              </li>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  {this.props.user.location}
                </span>
              </li>
              { this.props.currentUser.id === this.props.user.id ?
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
        </div>);
    } else {
      return(<div></div>);
    }
  }
}

export default UserShow;
