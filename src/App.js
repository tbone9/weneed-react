import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import MainContainer from './MainContainer';
import CreatePost from './CreatePost';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className='mainContainer'>
      <Switch>
        
        <Route exact path='/main' component={MainContainer}/>
        <Route exact path='/create-post' component={CreatePost}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        
      </Switch>
      </div>
    </div>
  );
}

export default App;
