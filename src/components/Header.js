import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import '../layouts/MainHeader.css'

class Header extends Component {
  render()  {
  return (
    <header className="MainHeader">
      <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
      <nav className="nav_menu">
        <ul>
          <Link to = "/" className="logout"> Log out </Link>
        </ul>
        </nav>
    </header>
    )
    }
  }

export default Header;
