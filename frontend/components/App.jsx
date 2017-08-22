import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => {
  return(
    <div className='page'>
      <header>

        <GreetingContainer />
      </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  );
};
export default App;
