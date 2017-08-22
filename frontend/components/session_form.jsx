import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const user = Object.assign({}, this.state);
    this.props.processForm({user: user});
  }

  handleInput(e){
    let username = this.state.username;
    let password = this.state.password;
    if(e.currentTarget.name === 'username'){
      username = e.currentTarget.value;
    } else {
      password = e.currentTarget.value;
    }

    this.setState({username: username, password: password});
  }

  render() {
    if(this.props.loggedIn) {
      return(
        <Route path='/' />
      );
    } else {
      return(
        <div>
          <h1>
            {this.props.formType === "login" ? 'Log in' : "Sign up"}
          </h1>
          <Link to={this.props.formType === 'login' ? 'signup' : 'login'}>
            {this.props.formType === 'login' ? 'Sign up' : 'Log in'}
          </Link>
          <ul>
            {
              this.props.errors.map((el) => {
                return <li>{el}</li>
              })
            }
          </ul>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type='text' id='username' name='username' onInput={this.handleInput}></input>
            <label htmlFor="password">Password</label>
            <input type='password' id='password' name='password' onInput={this.handleInput}></input>
            <input type='submit' value={this.props.formType === 'login' ? 'login' : 'signup'} />
          </form>
        </div>
      );
    }
  }

}

export default withRouter(SessionForm);