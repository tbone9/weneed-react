import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainContainer from './components/MainContainer';
import CreatePost from './components/CreatePost';
import Register from './components/Register';
import Login from './components/Login';
import Group from './components/Group';
import CreateGroup from './components/CreateGroup';

function App() {


  return (
    <div className="App">
      <Router>
        
      <HeaderComponent />
        <div className='mainContainer'>
        <Switch>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>
          
          
            <Route exact path='/main' component={MainContainer}/>
            <Route exact path='/group/create-post/:id' component={CreatePost}/>
            <Route exact path='/group/:id' component={Group}/>
            <Route exact path='/create-group' component={CreateGroup}/>
          
          
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
