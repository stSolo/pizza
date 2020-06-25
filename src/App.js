import React from 'react';
import Main from './components/MainComponent';
import NotFound from './components/NotFound';
import { Router } from '@reach/router';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

function App() {

  return (
    <div className="App">
    <Router>
      <Main path = '/' />
      <NotFound default />
    </Router>
    </div>
  );
}

export default App;
