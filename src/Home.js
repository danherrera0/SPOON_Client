// default Home Component
// App Component will only be visible once user is authenticated

import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      You are not logged in! Please login to use app.

      </div>
    );
  }
}

export default App;
