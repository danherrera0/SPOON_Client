import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Header from '../components/Header';
import SidebarContainer from './SidebarContainer';
import SwipeContainer from './SwipeContainer';
import Footer from '../components/Footer';
import '../layouts/MainContainer.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

let randomNum= Math.floor(Math.random() * Math.floor(800))

class UserMain extends Component {

  state={
    restaurants:[],
    shortlist:[],
    startIdx:randomNum ,
    endIdx:randomNum+1,
    likedRestaurants:[],
    loaded:false,
    id: this.props.match.params.id,
  }

  removeRest = (e, restaurant) => {
    console.log(this.state.likedRestaurants)
    console.log(restaurant.id);
    let newChosen = this.state.likedRestaurants.filter(likedRestaurant => likedRestaurant.id != restaurant.id)
    this.setState({
      likedRestaurants: newChosen
    })
  }

//we are faking auth with our login
//here we fetch for restaurants from our backend - 1st fetch
//We also fetch for the specific user's likedRestaurants by grabbing their id after they log in - 2nd fetch
  componentDidMount(){
    fetch("http://localhost:3000/api/v1/restaurants")
    .then(r=>r.json())
    .then(fetchedRes=>{
      this.setState({
        restaurants:fetchedRes,
        shortlist:fetchedRes.slice(this.state.startIdx, this.state.endIdx)
      })
    })
    fetch( `http://localhost:3000/api/v1/users/${this.state.id}`)
    .then(r=>r.json())
    .then(user=>{
      this.setState({
        likedRestaurants: user.restaurants,
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
    return (
      <div className="MainContainer">
      <Header />
      <SidebarContainer
        likedRestaurants={this.state.likedRestaurants}
        removeRest={this.removeRest}
        />
      <SwipeContainer like={this.like} dislike={this.dislike} shortlist={this.state.shortlist}/>
      </div>
    )
  }
}

export default withRouter(UserMain);
