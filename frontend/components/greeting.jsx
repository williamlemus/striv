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

          <nav className='nav_bar'>
            <div>
              <span className='logo'>
                <Link to='/'>strīv</Link>
              </span>
              <span className='header-links'>
                <Link to='/'>
                  Dashboard
                </Link>
              </span>
              <span className='header-links'>
                <Link to='/new-workout'>
                  New Workout
                </Link>
              </span>
              <span className='header-links'>
                <Link to='/routes'>
                  My Routes
                </Link>
              </span>
            </div>
              <div className='header-right-links'>
                <span className='header-username'>{this.props.currentUser.username}</span>
                <span>
                  <Link to={'/users/' + this.props.currentUser.id}>
                    <img className='profile-pic' src={this.props.currentUser.image_url} />
                  </Link>
                </span>
                  <span onClick={this.handleLogout} className='nav-bar-link'>
                    Logout
                  </span>
                  <Link to='/new-route'>
                    <button className='new-route-link'>
                      +
                    </button>
                  </Link>

                </div>
          </nav>

      );
    } else {
      return(
          <nav className='nav_bar nav-bar-login'>

              <div className='logo'>
                strīv
              </div>
              <div className="login_nav_bar">

                <Link to='/signup' className="nav-bar-link">Signup</Link>
                or
                <Link to='/login' className='nav-bar-link'>Login</Link>
              </div>
          </nav>
      );
    }

  }
}

export default withRouter(Greeting);
