import React from 'react';
import './App.scss';
import MainContainer from './containers/main container/MainContainer';
import store from './redux/store';
import {Provider} from "react-redux";
import {BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MainContainer />
      </div>
    </Router>
  );
}

export default App;
