import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList'
import { compileFunction } from 'vm';
import Signup from './components/Signup'


function App() {
  return (
    <div className="App">
      <Signup></Signup>
      {/*<PostList></PostList>*/}
    </div>
  );
}

export default App;
