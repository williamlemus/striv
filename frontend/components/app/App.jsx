import React from 'react';
import GreetingContainer from '../greeting_container';
import SessionFormContainer from '../session_form_container';
import NewRouteContainer from '../workout/new_route_container';
import NewWorkoutContainer from '../workout/new_workout_container';
import ShowWorkoutContainer from '../workout/show_workout_container';
import ShowRouteContainer from '../workout/show_route_container';
import WorkoutIndexContainer from '../workout/workout_index_container';
import UserShowContainer from '../user/user_show_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../../util/route_util';


class App extends React.Component {

  render(){
    let background = this.props.currentUser ? 'page' : 'page login-background'
    return(
        <div>

          <GreetingContainer />
          <div className={background}>

            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
            <Switch>
              <ProtectedRoute path='/' exact component={WorkoutIndexContainer} />
              <ProtectedRoute path='/users/:id' exact component={UserShowContainer} />
              <ProtectedRoute path='/workouts/:id' exact component={ShowWorkoutContainer} />
              <ProtectedRoute path='/workouts' exact component={WorkoutIndexContainer} />
              <ProtectedRoute path='/routes/:id' exact component={ShowRouteContainer} />
              <ProtectedRoute path='/new-route' exact component={NewRouteContainer} />
              <ProtectedRoute path='/new-workout' exact component={NewWorkoutContainer} />
            </Switch>
          </div>
        </div>
    );
  }
}
export default App;
