import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import AppContainer from './app/app_container';

export const Root = (props) => {
  return(
    <Provider store={props.store}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </Provider>
  );
};

export default Root;
