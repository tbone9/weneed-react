import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import MainContainer from './MainContainer';
import CreatePost from './CreatePost';
import Register from './Register';
import Login from './Login';
import Group from './Group';

function App() {
  return (
    <div className="App">
      <Router>
        
      <HeaderComponent />
        <div className='mainContainer'>
        <Switch>
          
          <Route exact path='/main' component={MainContainer}/>
          <Route exact path='/group/create-post/:id' component={CreatePost}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/group/:id' component={Group}/>
          
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
