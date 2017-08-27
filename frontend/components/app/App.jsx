import React from 'react';
import GreetingContainer from '../greeting_container';
import SessionFormContainer from '../session_form_container';
import NewRouteContainer from '../workout/new_route_container';
import ShowWorkoutContainer from '../workout/show_workout_container';
import WorkoutIndexContainer from '../workout/workout_index_container'
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../../util/route_util';


class App extends React.Component {

  render(){
    let background = this.props.currentUser ? 'page' : 'page login-background'
    return(
      <div className={background}>

        <GreetingContainer />

        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Switch>
          {
            //must define a default home(activity feed) before changing the / path
          }
          <ProtectedRoute path='/' exact component={WorkoutIndexContainer} />
          <ProtectedRoute path='/workouts/:id' exact component={ShowWorkoutContainer} />
          <ProtectedRoute path='/workouts' exact component={WorkoutIndexContainer} />
          <ProtectedRoute path='/new-route' exact component={NewRouteContainer} />
        </Switch>
      </div>
    );
  }
}
export default App;
