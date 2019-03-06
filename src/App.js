import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MainContainer from './containers/MainContainer'
import './App.css';
import Home from './Home'
import Header from './components/Header'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/spoon" component={MainContainer} />

      </Switch>
    {/*}  <Footer /> */}
      </div>
    );
  }
}

export default App;
