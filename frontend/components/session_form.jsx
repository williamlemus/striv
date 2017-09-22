import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm({user: user});
  }

  handleGuestClick(e){
    const guest = {username: 'guest', password: 'password'}
    this.props.processForm({user: guest});
  }

  handleInput(e){
    let name = e.target.name
    let newVal = {};
    newVal[name] = e.target.value;
    this.setState(newVal);
  }


  signupTextBoxes(){
    if(this.props.formType === 'signup'){
      return(
        [
          <label key='lfname' htmlFor='first_name'>First Name</label>,
          <input type='text' id='first_name' name='first_name' className='input-text-login' key='fname'/>,
          <label key='llname' htmlFor='last_name'>Last Name</label>,
          <input type='text' id='last_name' className='input-text-login' name='last_name' key='lname' />
        ]
      );
    } else{
      return '';
    }
  }

  render() {
    if(this.props.loggedIn) {
      return(
        <Route path='/' />
      );
    } else {
      return(
        <div className='session_dialog'>
          <h1>
            {this.props.formType === "login" ? 'Log in' : "Sign up"}
          </h1>
          <ul>
            {
              this.props.errors.map((el, idx) => {
                return <li className='error' key={idx}>{el}</li>
              })
            }
          </ul>

          <form className='session-form' onChange={this.handleInput}>
            {this.signupTextBoxes()}
            <label htmlFor="username">Username</label>
            <input className='input-text-login' type='text' id='username' name='username'></input>
            <br/>
            <label htmlFor="password">Password</label>
            <input className='input-text-login' type='password' id='password' name='password'></input>
            <br/>
            <input type='submit' className='submit-btn' value={this.props.formType === 'login' ? 'Log In' : 'Sign Up'} onClick={this.handleSubmit} />
          </form>
          <button onClick={this.handleGuestClick} className='submit-btn guest-login-btn'>Guest Login </button>
          <Link to={this.props.formType === 'login' ? 'signup' : 'login'}>
            {this.props.formType === 'login' ? 'Sign up' : 'Log in'}
          </Link>
        </div>
      );
    }
  }

}

export default withRouter(SessionForm);
