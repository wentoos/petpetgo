import React, { Component } from 'react';
import './css/App.css';
import Login from './components/Login'
import LoginUp from './components/Login-up'
import Home from './components/Home'
import Search from './components/main/Search'

import {BrowserRouter as Router,Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Home}/>
                <Route  path='/login' component={Login}/>
                <Route  path='/login-up' component={LoginUp}/>
                <Route  path='/search' component={Search}/>
            </div>
        </Router>
    )
  }
}

export default App;
