import React, { Component } from 'react';
import Header from '../components/Header';
import SidebarContainer from './SidebarContainer';
import SwipeContainer from './SwipeContainer'

class MainContainer extends Component {
  render () {
    console.log("hello");
    return (
    <React.Fragment>

    <Header />
    <SidebarContainer/>
    <SwipeContainer/>

    </React.Fragment>)
  }
}



export default MainContainer;
