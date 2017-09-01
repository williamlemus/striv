import React from 'react';
import {secondsToTime} from '../../util/converters'

class ShowWorkout extends React.Component{

  constructor(props){
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      toggleModal: false,
      title: '',
      exercise: '',
      description: '',
      button: ''
    };
  }

  componentWillReceiveProps(newProps){

    if(this.props.match.url !== newProps.match.url){
      this.props.getWorkout(newProps.match.params.id)
      .then(() => {
          this.initDrawing();
        }
      );
    }
  }

  componentDidMount(){
    const that = this;
    this.props.getWorkout(this.props.match.params.id)
    .then(
      () => {
        this.initDrawing();
      }
    );

  }

  initDrawing(){
    let route = this.props.routes[this.props.workout.route_id];
    let workoutPolyline = new google.maps.Polyline({
      path: google.maps.geometry.encoding.decodePath(route.polyline),
    });
    let bounds = new google.maps.LatLngBounds();
    workoutPolyline.getPath().forEach((l) => bounds.extend(l));

    const mapOptions = {
      zoom: 13,
      disableDefaultUI: true,
      zoomControl: true
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    workoutPolyline.setMap(this.map);
    this.map.fitBounds(bounds);
  }

  toggleModal(e){
    if(this.state.toggleModal){
      // untoggle
      this.setState({toggleModal: false, button: ''});
    } else {
      // set the initial state of the things to be edited
      let name = e.currentTarget.getAttribute('name');
      this.setState({
        toggleModal: true,
        title: this.props.workout.title,
        exercise: this.props.workout.exercise,
        description: this.props.workout.description,
        button: name
      });

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
    let workoutUpdates = Object.assign({}, this.state);
    this.props.clearErrors();
    delete(workoutUpdates.toggleModal);
    workoutUpdates.id = this.props.workout.id;
    if(this.state.button === 'edit'){
      this.props.updateWorkout(workoutUpdates)
      .then(() => this.toggleModal());
    } else {
      this.props.deleteWorkout(this.props.match.params.id).then(()=>{
        this.props.clearErrors();
        this.props.history.push('/') }
      );

    }
  }

  showEditInputFields(){
    if(this.state.button === 'edit'){
      return(
        [
          <label htmlFor='title' key='edit_input0'>Title</label>,
          <input id='title' defaultValue={this.props.workout.title} name='title' key='edit_input'/>,
          <label htmlFor='exercise_type' key='edit_input1'>Exercise Type</label>,
          <select id='exercise_type' defaultValue={this.props.workout.exercise} name='exercise' key='edit_input2'>
            <option value='ride'>ride</option>
            <option value='run'>run</option>
          </select>,
          <label htmlFor='description' key='edit_input3'>Description</label>,
          <input id='description' defaultValue={this.props.workout.description} name='description' key='edit_input4'/>
        ]);
    }
  }

  render(){
    if(this.props.workout){
      const workout = this.props.workout;
      const route = this.props.routes[workout.route_id];
      return (
        <div className='workout-container'>
          {this.props.currentUser.id === this.props.workout.user_id ? <span onClick={this.toggleModal} className='workout-edit' name='edit'><i className="fa fa-pencil" aria-hidden="true"></i></span> : ''}
          {this.props.currentUser.id === this.props.workout.user_id ? <span onClick={this.toggleModal} className='workout-edit' name='delete'><i className="fa fa-trash" aria-hidden="true"></i></span> : ''}
          <section className='workout-detail'>
            <div className='workout-exercise'>
              <h2>{workout.exercise}</h2>
            </div>
            <div className='workout-info'>
              <div className='workout-title'>
                <h5 className='workout-date'>{new Date(workout.start_datetime).toLocaleString()}</h5>
              <div>

                <h3>
                  {workout.title}
                </h3>
                <h4>
                  {workout.description}
                </h4>
              </div>
              </div>
              <div className='workout-stats'>
                <ul>
                  <li>{route.distance/1000}km
                    <span className='workout-stats-label'>
                      Distance
                    </span>
                  </li>
                  <li>{secondsToTime(workout.workout_time)}
                    <span className='workout-stats-label'>
                      Time
                    </span>

                  </li>

                </ul>
              </div>
          </div>
          </section>
          <div id='map-container' className='workout-map' ref={ map => this.mapNode = map}>
          </div>
          <div className={'edit-workout-modal-screen modal' + (this.state.toggleModal ? 'is-active' : '')} onClick={this.toggleModal}>
            <div className='edit-form' onClick={e => e.stopPropagation()}>
              <div className='close-edit-form' onClick={this.toggleModal}>X</div>
              {this.props.errors ? this.props.errors.map((el, idx)=> <div className='error' key={idx}>{el}</div>) : null}
              <div className='edit-workout-title'>{this.state.button === 'edit' ? 'Edit Workout' : 'Delete Workout'}</div>
              <form onChange={this.handleInput}>
                {this.showEditInputFields()}
                <input type='submit' onClick={this.handleSubmit} className='submit-btn' value={this.state.button === 'edit' ? 'Edit Workout' : 'Delete Workout'}/>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return(<div>No workouts found!</div>);
    }

  }
}


export default ShowWorkout;
