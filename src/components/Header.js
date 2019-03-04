import React, { Component } from 'react';
import '../layouts/MainHeader.css'

class Header extends Component {
  render()  {
  return (
    <header className="MainHeader">
       <h1 className="logo">Let's Spoon <i className="fa fa-spoon"></i></h1>

        <nav className="nav_menu">
          <ul>
            <li><a href="https://github.com/">about</a></li>
            <li><a href="https://localhost/3000/">signout</a></li>
          </ul>
        </nav>
    </header>
    )

    }
  }

export default Header;
