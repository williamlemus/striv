import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './App';

export const Root = (props) => {
  return(
    <Provider store={props.store}>
      <HashRouter>
        <App store={props.store}/>
      </HashRouter>
    </Provider>
  );
};

export default Root;
