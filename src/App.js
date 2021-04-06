import React from 'react';
import { Switch, Router } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Switch>
      <Router path="/" component={Login} />
      <Router path="/home" component={Home} />
    </Switch>
  );
}

export default App;
