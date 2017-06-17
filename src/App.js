import React, { Component } from 'react';
import './css/App.css';
import Login from './components/Login'

import Home from './components/Home'
import Search from './components/main/Search'
import User from './components/main/User'

import {BrowserRouter as Router,Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Home}/>
                <Route  path='/login' component={Login}/>
                <Route  path='/search' component={Search}/>
                <Route  path='/user' component={User}/>

            </div>
        </Router>
    )
  }
}

export default App;
