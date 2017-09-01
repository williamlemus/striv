import React from 'react';


class EditProfile extends React.Component {
  constructor(props){
    super(props);
    const user = this.props.currentUser;
    this.state = {
      first_name: (user.first_name ? user.first_name : ''),
      last_name: (user.last_name ? user.last_name : ''),
      location: (user.location ? user.location : ''),
      weight: (user.weight ? user.weight : ''),
      bio: (user.bio ? user.bio : ''),
      image_file: null,
      image_url: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const userUpdates = this.state;
    const formData = new FormData();

    if(this.state.image_file){
      formData.append("user[image]", this.state.image_file);
    }

    formData.append("user[first_name]", this.state.first_name);
    formData.append("user[last_name]", this.state.last_name);
    formData.append("user[location]", this.state.location);
    formData.append("user[weight]", this.state.weight);
    formData.append("user[bio]", this.state.bio);

    userUpdates.id = this.props.currentUser.id;
    this.props.updateUser(formData, this.props.currentUser.id)
      .then((res) => this.props.history.push(`/users/${res.user.id}`));
  }

  handleInput(e){
    let name = e.target.name
    let newVal = {};
    newVal[name] = e.target.value;
    this.setState(newVal);
  }

  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ image_file: file, image_url: fileReader.result })
    };
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    const user = this.props.currentUser
    return(
      <div className='update-profile-container'>
        <form className='user-update-form' onChange={this.handleInput}>
          <ul>
            {
              this.props.errors ? this.props.errors.map((el, idx) => <li key={idx} className='error'>{el}</li>) : ''
            }
          </ul>
          <label htmlFor='first_name'>First Name</label>
          <input id='first_name' className='user-update-namefield' type='text' defaultValue={user.first_name} name='first_name' />
          <label htmlFor='last_name'>Last Name</label>
          <input id='last_name' className='user-update-namefield' type='text' defaultValue={user.last_name} name='last_name' />
          <div>
            <label htmlFor='location'>Location</label>
            <input id='location' type='text' defaultValue={user.location} name='location' />
            <label htmlFor='weight'>Weight(kg)</label>
            <input id='weight' className='user-update-weight' type='number' defaultValue={user.weight} name='weight'/>
          </div>
          <div className='update-profile-bio'>
            <span>
              <label htmlFor='bio'>Bio</label>
              <textarea id='bio' className='user-update-bio' type='text' name='bio' defaultValue={user.bio}></textarea>
            </span>
            <div className='profile-pic-update'>
              <label htmlFor='profile-pic' className='nav-bar-link profile-pic-button'>Change Profile Picture</label>
              <input type='file' accept='.jpg, .jpeg, .png' id='profile-pic' onChange={this.handleFile}></input>
              {
                this.state.image_url ?
                <img className='profile-pic' src={this.state.image_url} />
                : ''
              }
            </div>
            <input className='submit-btn' type='submit' onClick={this.handleSubmit} value='Update Profile'/>
          </div>
        </form>
      </div>);
  }
};


export default EditProfile;
