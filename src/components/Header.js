import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';

import '../layouts/MainHeader.css'

class Header extends Component {
  render()  {
  return (
    <header className="MainHeader">
      <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
      <button className="logout" onClick={()=>this.props.history.push('/')}>Log Out </button>
    </header>
    )
    }
  }

export default withRouter(Header);
