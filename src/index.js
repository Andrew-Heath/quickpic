import React from 'react';
import ReactDOM from 'react-dom';

// Component Imports
import Header from './components/header.js';
import Landing from './components/landing.js';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'

// Redux related imports
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div classname="background">
      <Header />
      <Switch>
        <Route exact path='/' component={Landing}/>
      </Switch>
    </div>
  </Provider>,
  document.getElementById('app')
);
