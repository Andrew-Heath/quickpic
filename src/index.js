import React from 'react';
import ReactDOM from 'react-dom';

// Component Imports
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Redux related imports
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <Route exact path='/' component={App}/>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);
