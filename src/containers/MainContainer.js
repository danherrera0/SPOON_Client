import React, { Component } from 'react';
import Header from '../components/Header';
import SidebarContainer from './SidebarContainer';
import SwipeContainer from './SwipeContainer';
import Footer from '../components/Footer';
import '../layouts/MainContainer.css';


class MainContainer extends Component {

  state={
    restaurants:[],
    shortlist:[],
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/restaurants")
    .then(r=>r.json())
    .then(fetchedRes=>{
      this.setState({
        restaurants:fetchedRes,
        shortlist:fetchedRes.slice(0,1)
      })
    })
  }

  render () {
    return (
    <div className="MainContainer">

    <Header />
    <SidebarContainer/>
    <SwipeContainer restaurants={this.state.shortlist}/>
    <Footer />

    </div>)
  }
}



export default MainContainer;
