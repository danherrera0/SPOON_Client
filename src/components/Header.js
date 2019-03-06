import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';

import '../layouts/MainHeader.css'

class Header extends Component {
  render()  {
  return (
    <header className="MainHeader">
      <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
      <nav className="nav_menu">
        <ul>
          <button onClick={()=>this.props.history.push('/')}>Log Out </button>
        </ul>
        </nav>
    </header>
    )
    }
  }

export default withRouter(Header);
