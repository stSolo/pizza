import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {

  return (
    <Provider store = {store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
