import React from 'react';
import { withRouter } from 'react-router-dom';

class NewWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    const defaultDate = this.getCurrentDate();
    this.state= {
        loaded_data: false,
        title: '',
        exercise: 'ride',
        hours: '',
        minutes: '',
        seconds: '',
        start_datetime: defaultDate,
        description: '',
        routes: []
     }

  }


  errors(){
    if(this.props.errors.length > 0){
      return(
        <ul>
          {this.props.errors.map((err, idx) => <li className='error' key={idx}>{err}</li>)}
        </ul>
      );
    } else {
      return '';
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let workoutDetails = Object.assign({}, this.state);
    workoutDetails.user_id = this.props.currentUser.id;
    //dispatch time!
    this.props.clearErrors();
    this.props.newWorkout(workoutDetails).then((res) =>{
      this.props.history.push(`/workouts/${res.workout.workout.id}`);
    });

  }

  handleInput(e){
    let name = e.target.name
    let newVal = {};
    newVal[name] = e.target.value;
    this.setState(newVal);
  }

  getCurrentDate() {
    let date = new Date().toLocaleString("en-gb");
    let formattedDate = date.slice(6,10) + '-' + date.slice(3,5) + '-' + date.slice(0,2) + 'T' + date.slice(12,17);
    return formattedDate;
   }

   componentDidMount(){
     //get all routes that user owns
     this.props.getRoutes()
      .then(this.setState({loaded_data: true}));

   }


  render(){
    // add above form when working{this.errors()}
    if(this.state.loaded_data){
      return(
        <div className='new-workout-container'>
          <form className='new-workout-form' onChange={this.handleInput}>
            <label htmlFor='title'>Title</label>
            <input id='title' name="title" />
            <label htmlFor='exercise_type'>Exercise</label>
            <select id='exercise_type' name="exercise" defaultValue='ride'>
              <option value='ride'>Ride</option>
              <option value='run'>Run</option>
            </select>

            <fieldset>
              <legend>
                Duration
              </legend>
              <input type='number' name="hours" id='hours' defaultValue='0' max='999' />
              <label htmlFor='hours'>HH</label>
              <input type='number' name="minutes" id='min' defaultValue='0' max='59' />
              <label htmlFor='min'>MM</label>
              <input type='number' name="seconds" id='seconds' defaultValue='0' max='59'/>
              <label htmlFor='seconds'>ss</label>
            </fieldset>
            <div className='workout-form-date'>
              <label htmlFor='date'>
                Date
              </label>
              <input id='date' type='datetime-local' defaultValue={this.getCurrentDate()} name="start_datetime" />
            </div>
            <div>
              <label htmlFor='route_id'>Route</label>
              <select id='route_id' name='route_id' defaultValue='default'>
                <option value='default' key='-1' disabled>Select a Route</option>
              {
                this.props.currentUser.route_ids.map((el, idx) =>{
                  return <option key={idx} value={el}>{this.props.routes[el].title}</option>
                })
              }
            </select>
            </div>
            <div>
              <label htmlFor='description'>Description</label>
              <textarea id='description' name='description'></textarea>
            </div>
            <input type='submit' className='enabled' onClick={this.handleSubmit} value='Create Workout'/>
          </form>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}


export default withRouter(NewWorkout);
