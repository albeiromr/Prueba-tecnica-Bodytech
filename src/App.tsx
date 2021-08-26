import React from 'react';
import './App.scss';
import MainContainer from './containers/main container/MainContainer';
import store from './redux/store';
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
