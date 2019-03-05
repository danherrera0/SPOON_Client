// default Home Component
// App Component will only be visible once user is authenticated
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer'
import Header from './components/Header';
import './layouts/Home.css';

class Home extends Component {

  // handleSubmit=(e)=>{
  //   e.preventDefault()
  // }

  render() {
    return (
      <React.Fragment>
      <Header />
      <div className="login">
      <div className="loginForm">
      <h1> Please log in to start exploring restaurants</h1>
      <form>
      <label><b>Email </b></label><br/>
      <input type="text" name="email" placeholder="Enter Email"></input><br/>
      <label><b>Password</b></label><br/>
      <input type="text" name="password" placeholder="Enter Password"></input><br/><br/>
      <Link to="/spoon" className="link">Enter</Link>
      </form>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Home;
