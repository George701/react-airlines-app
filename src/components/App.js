import React from 'react';
import { Provider } from 'react-redux';

import '../App.css';
import store from '../store'

import Router from './Router'

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
