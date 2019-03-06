import React, { Component } from 'react';
// import Header from '../components/Header';
// import SidebarContainer from './SidebarContainer';
// import SwipeContainer from './SwipeContainer';
import Deck from './Deck';
// import Footer from '../components/Footer';
// import '../layouts/MainContainer.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import "../layouts/Deck.css";

class MainContainer extends Component {

  state={
    restaurants:[],
    shortlist:[],
    startIdx: 1,
    endIdx: 2,
    likedRestaurants:[],
    loaded:false,
  }

  removeRest = (e, restaurant) => {
    console.log(this.state.likedRestaurants)
    console.log(restaurant.id);
    let newChosen = this.state.likedRestaurants.filter(likedRestaurant => likedRestaurant.id != restaurant.id)
    this.setState({
      likedRestaurants: newChosen
    });

  }
    //after the user logs in, we get their user id to perform a fetch request for their matched restaurants
    userUrl=()=>{
      fetch(this.props.url)
      .then(r=>r.json())
      .then(user => {
        this.setState({
        likedRestaurants: user.restaurants,
        loaded:true,
        })
        this.props.history.push(`/spoon`)
      })
    } //need to invoke userUrl

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
    // create a post request page
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
    // if(this.state.loaded){
    //   return null
    // }else{
    //  this.userUrl()
    // }
    return (
    <div className="MainContainer">


    <Deck
      like={this.like}
      dislike={this.dislike}
      shortlist={this.state.shortlist}
      />


    </div>
  )
  }
}



export default MainContainer;
