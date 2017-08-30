import React from 'react';


class EditProfile extends React.Component {
  constructor(props){
    super(props);
    const user = this.props.currentUser;
    this.state = {
      first_name: user.first_name,
      last_name: user.last_name,
      location: user.location,
      weight: user.weight,
      bio: user.bio,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const userUpdates = this.state;

    userUpdates.id = this.props.currentUser.id;
    this.props.updateUser(userUpdates)
      .then((res) => this.props.history.push(`/users/${res.user.id}`));
  }

  handleInput(e){
    let name = e.target.name
    let newVal = {};
    newVal[name] = e.target.value;
    this.setState(newVal);
  }

  render(){
    const user = this.props.currentUser
    return(<div>

      <form className='user-update-form' onChange={this.handleInput}>
        <label htmlFor='first_name'>First Name</label>
        <input id='first_name' type='text' defaultValue={user.first_name} name='first_name' />
        <label htmlFor='last_name'>Last Name</label>
        <input id='last_name' type='text' defaultValue={user.last_name} name='last_name' />
        <label htmlFor='location'>Location</label>
        <input id='location' type='text' defaultValue={user.location} name='location' />
        <label htmlFor='weight'>Weight(kg)</label>
        <input id='weight' type='number' defaultValue={user.weight} name='weight'/>
        <label  htmlFor='bio'>Bio</label>
        <textarea id='bio' type='text' name='bio' defaultValue={user.bio}></textarea>
        <label htmlFor='profile_pic'>Upload picture</label>
        <input className='submit-btn' type='submit' onClick={this.handleSubmit} value='Update Profile'/>
      </form>
    </div>);
  }
};


export default EditProfile;
