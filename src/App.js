import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import store from './store'

import Login from './components/routes/Login'
import Test from './components/routes/Test'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/test" component={Test}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
