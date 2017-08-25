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
                strīv
              </div>
              <span><Link to='/new-route'>&#x1F6B2; New Route [+]</Link></span>
              <form>
                <input type='submit' onClick={this.handleLogout} value='logout'></input>
              </form>
          </nav>
          Hello, {this.props.currentUser.username}!
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
