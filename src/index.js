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
    <div className="background">
      <Header />
      <div className="app-wrapper">
        <Switch>
          <Route exact path='/' component={Landing}/>
        </Switch>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
