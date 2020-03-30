import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path='/main' component={MainContainer}/>
      </Switch>
    </div>
  );
}

export default App;
