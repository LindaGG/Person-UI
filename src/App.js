import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';
//import PostList from './components/PostList'

import Signup from './components/Signup'
import Login from './components/Login'
import Usermain from './components/Usermain'
import PostList from './components/PostList'


function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/signup" component = {Signup} />
        <Route path = "/login" component = {Login} />
        <Route path = "/usermain" component = {Usermain} />
        <Route path = "/postlist" component = {PostList} />

      </div>
    </Router>
  );
}

export default App;
