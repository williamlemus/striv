import React from 'react';
import RoutesIndexItem from './route_index_item';
import UserStats from '../user/user_stats';
import {Link} from 'react-router-dom'

class RoutesIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded_data: false,
      toggleModal: false,
      title: '',
      routeid: '',
      button: ''
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.user_id){
      this.props.getRoutes(this.props.user_id).then(() => this.setState({loaded_data: true}));
    } else {
      this.props.getRoutes().then(() => this.setState({loaded_data: true}));
    }
  }

  handleInput(e){
    let name = e.target.name
    let newVal = {};
    newVal[name] = e.target.value;
    this.setState(newVal);
  }

  handleSubmit(e){
    e.preventDefault();
    let routeUpdates = Object.assign({}, this.state);
    this.props.clearErrors();
    delete(routeUpdates.toggleModal);
    delete(routeUpdates.button);
    delete(routeUpdates.loaded_data);
    routeUpdates.id = this.state.routeid;
    if(this.state.button === 'edit'){
      this.props.updateRoute(routeUpdates)
      .then(() => this.toggleModal());
    } else {
      this.props.deleteRoute(this.state.routeid).then(()=>{
        this.setState({loaded_data: true}, () => {
          this.props.getRoutes();
          this.toggleModal();
        });
      }
      );

    }
  }

  showEditInputFields(){
    if(this.state.button === 'edit'){
      return(
        [
          <label htmlFor='title' key='edit_input10'>Title</label>,
          <input type='text' id='title' defaultValue={this.state.title} name='title' key='edit_input11'/>
        ]);
    }
  }

  toggleModal(e, route){
    if(this.state.toggleModal){
      // untoggle
      this.setState({toggleModal: false, button: ''});
    } else {
      // set the initial state of the things to be edited
      let name = e.currentTarget.getAttribute('name');
      this.setState({
        toggleModal: true,
        title: route.title,
        routeid: route.id,
        button: name
      });

    }
  }

  render(){
    const { users, currentUser, routes, user_id } = this.props;
    if( !this.state.loaded_data){
      return null;
    } else if(routes.length === 0){
      return( <h2>Add some <Link to='new-route'>routes</Link></h2>);
    } else {
      let user;
      let title = ''
      if(user_id){
        user = users[user_id];
        title = user.first_name + "'s"
      } else {
        user = currentUser;
        title = 'Your';
      }
      return(
        <div className='workout-index'>
          <div>
            <h1>{title} Routes</h1>
            <div className='route-feed'>
              {
                routes.map((route, idx) => {
                  return(
                    <RoutesIndexItem route={route} users={users} currentUser = {currentUser} toggleModal={this.toggleModal} key={idx} />
                  )
                })
              }
            </div>
            <div className={'edit-workout-modal-screen modal' + (this.state.toggleModal ? 'is-active' : '')} onClick={this.toggleModal}>
              <div className='edit-form' onClick={e => e.stopPropagation()}>
                <div className='close-edit-form' onClick={this.toggleModal}>X</div>
                {this.props.errors ? this.props.errors.map((el, idx)=> <div className='error' key={idx}>{el}</div>) : null}
                <div className='edit-workout-title'>{this.state.button === 'edit' ? 'Edit Route' : 'Delete Route'}</div>
                <form onChange={this.handleInput}>
                  {this.showEditInputFields()}
                  <input type='submit' onClick={this.handleSubmit} className='submit-btn' value={this.state.button === 'edit' ? 'Edit Route' : 'Delete Route'}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RoutesIndex;
