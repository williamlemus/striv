import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component{

  render(){
    if(this.props.currentUser){
      return(
        <div>
          Hello, {this.props.currentUser.username}!
          <form>
            <input type='submit' onClick={(e) => this.props.logout()} value='logout'></input>
          </form>
        </div>
      );
    } else {
      return(
        <div>
          <h1>Greetings</h1>
          <Link to='/signup'>Signup</Link>
           or
          <Link to='/login'>Login</Link>

        </div>
      );
    }

  }
}

export default Greeting;
