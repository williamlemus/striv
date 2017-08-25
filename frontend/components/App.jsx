import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import NewRouteContainer from './new_route/new_route_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = (props) => {
  let background = props.store.currentUser ? 'page' : 'page login-background'
  return(
    <div className={background}>

      <GreetingContainer />

      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path='/new-route' exact component={NewRouteContainer} />

    </div>
  );
};
export default App;
