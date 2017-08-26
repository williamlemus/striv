import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import NewRouteContainer from './workout/new_route_container';
import ShowWorkoutContainer from './workout/show_workout_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = (props) => {
  let background = props.store.currentUser ? 'page' : 'page login-background'
  return(
    <div className={background}>

      <GreetingContainer />

      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Switch>
        {
          //must define a default home(activity feed) before changing the / path
        }
        <ProtectedRoute path='/workouts/:id' exact component={ShowWorkoutContainer} />
        <ProtectedRoute path='/' exact component={NewRouteContainer} />
        <ProtectedRoute path='/new-route' exact component={NewRouteContainer} />
      </Switch>
    </div>
  );
};
export default App;
