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
    startIdx: 1,
    endIdx: 2,
    likedRestaurants:[],
  }

  removeRest = (e, restaurant) => {
    console.log(this.state.likedRestaurants)
    console.log(restaurant.id);
    let newChosen = this.state.likedRestaurants.filter(likedRestaurant => likedRestaurant.id != restaurant.id)
    this.setState({
      likedRestaurants: newChosen
    });

  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/restaurants")
    .then(r=>r.json())
    .then(fetchedRes=>{
      this.setState({
        restaurants:fetchedRes,
        shortlist:fetchedRes.slice(this.state.startIdx, this.state.endIdx)
      })
    })
  }

  dislike=()=>{
    let newStart = this.state.startIdx +1
    let newEnd = this.state.endIdx +1
    this.setState({
      startIdx: this.state.startIdx +1,
      endIdx: this.state.endIdx +1,
      shortlist: this.state.restaurants.slice(newStart, newEnd)
    })
  }

  like=(e, restaurant)=>{
    console.log(e, restaurant)
    let newStart = this.state.startIdx +1
    let newEnd = this.state.endIdx +1
    this.setState({
      startIdx: this.state.startIdx +1,
      endIdx: this.state.endIdx +1,
      shortlist: this.state.restaurants.slice(newStart, newEnd),
      likedRestaurants : [...this.state.likedRestaurants, restaurant]
    })
  }

  render () {

    return (
    <div className="MainContainer">
    <Header />
    <SidebarContainer
      likedRestaurants={this.state.likedRestaurants}
      removeRest={this.removeRest}
      />
    <SwipeContainer like={this.like} dislike={this.dislike} shortlist={this.state.shortlist}/>
    <Footer />
    </div>
  )
  }
}



export default MainContainer;
