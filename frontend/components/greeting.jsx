import React from 'react';
import {Link} from 'react-router-dom';


class Greeting extends React.Component{

  render(){

    if(this.props.currentUser){
      return(
        <div>
          <nav className='nav_bar'>
              <div className='logo'>
                strīv
              </div>
              <form>
                <input type='submit' onClick={(e) => this.props.logout()} value='logout'></input>
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

export default Greeting;
