import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import MainContainer from './MainContainer';
import CreatePost from './CreatePost';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path='/main' component={MainContainer}/>
        <Route exact path='/create-post' component={CreatePost}/>
      </Switch>
    </div>
  );
}

export default App;
