// default Home Component
// App Component will only be visible once user is authenticated

import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import Header from './components/Header';
import './App.css';
import './layouts/Home.css';

class App extends Component {
  render() {
    return (
      <div className="login">
      <div className="loginForm">
      <h1>Let's Spoon <i className="fa fa-spoon"></i></h1>
      <h2> Please log in, to start exploring restaurants</h2>
      <form>
      <label><b>Email: </b></label>
      <input type="text" name="email"></input><br/>
      <label><b>Password:</b></label>
      <input type="text" name="password"></input><br/>
      <button type="submit">Enter</button>
      </form>
      </div>
      </div>
    );
  }
}

export default App;
