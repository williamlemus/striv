import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    this.props.logout().then(()=>this.props.history.push('/'))
  }

  render(){
    if(this.props.currentUser){
      return(
        <div>
          <nav className='nav_bar'>
              <div className='logo'>
                <Link to='/'>strīv</Link>
              </div>
              <span><Link to='/'>Feed</Link></span>
              <div>

                <span><Link to='/new-route'>&#x1F6B2; New Route [+]</Link></span>
                <span>{this.props.currentUser.username}</span>
                <span>
                  <Link to={'/users/' + this.props.currentUser.id}>
                    <img className='profile-pic' src={this.props.currentUser.image_url} />
                  </Link>
                </span>
                  <span onClick={this.handleLogout} className='nav-bar-link'>
                    Logout
                  </span>
                </div>
          </nav>
        </div>
      );
    } else {
      return(
        <div>
          <nav className='nav_bar'>

              <div className='logo'>
                strīv
              </div>
              <div className="login_nav_bar">

                <Link to='/signup' className="nav-bar-link">Signup</Link>
                or
                <Link to='/login' className='nav-bar-link'>Login</Link>
              </div>
          </nav>
        </div>
      );
    }

  }
}

export default withRouter(Greeting);
