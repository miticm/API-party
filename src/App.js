import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like this</h3>
          <h1>API party</h1>
        </div>
        <ul>
          <li>
            <NavLink to='/github'>github api</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/github' render={() => <h1>github</h1>}></Route>
          <Route render={() => <p>Click some link</p>}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
