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

  toggleModal(){
    if(this.state.toggleModal){
      // untoggle
      this.setState({toggleModal: false});
    } else {
      // set the initial state of the things to be edited
      this.setState({
        toggleModal: true,
        title: this.props.workout.title,
        exercise: this.props.workout.exercise,
        description: this.props.workout.description
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
    this.props.updateWorkout(workoutUpdates)
    .then(() => this.toggleModal());
  }

  render(){
    if(this.props.workout){
      const workout = this.props.workout;
      const route = this.props.routes[workout.route_id];
      return (
        <div className='workout-container'>

          {this.props.currentUser.id === this.props.workout.user_id ? <span onClick={this.toggleModal} className='workout-edit'><i className="fa fa-pencil" aria-hidden="true"></i></span> : ''}
          <section className='workout-detail'>
            <div className='workout-exercise'>
              <h2>{workout.exercise}</h2>
            </div>
            <div className='workout-info'>
              <div className='workout-title'>
                <h5 className='workout-date'>{new Date(workout.start_datetime).toLocaleString()}</h5>
                <h3>
                  {workout.title}
                </h3>
                <h4>
                  {workout.description}
                </h4>
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
              <div className='edit-workout-title'>Edit Workout</div>
              <form onChange={this.handleInput}>
                <label htmlFor='title'>Title</label>
                <input id='title' defaultValue={workout.title} name='title'/>
                <label htmlFor='exercise_type'>Exercise Type</label>
                <select id='exercise_type' defaultValue={workout.exercise} name='exercise'>
                  <option value='ride'>ride</option>
                  <option value='run'>run</option>
                </select>
                <label htmlFor='description'>Description</label>
                <input id='description' defaultValue={workout.description} name='description'/>
                <input type='submit' onClick={this.handleSubmit} className='submit-btn' value='Edit Workout'/>
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
