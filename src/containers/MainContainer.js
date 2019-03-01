import React, { Component } from 'react';
import Header from '../components/Header';
import SidebarContainer from './SidebarContainer';
import SwipeContainer from './SwipeContainer';
import Footer from '../components/Footer';
import '../layouts/MainContainer.css';


class MainContainer extends Component {
  render () {
    console.log("hello");
    return (
    <div className="MainContainer">

    <Header />
    <SidebarContainer/>
    <SwipeContainer/>
    <Footer />

    </div>)
  }
}



export default MainContainer;
