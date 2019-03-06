import React, { Component } from 'react';
import RestaurantDetails from "./RestaurantDetails"
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import '../layouts/SwipeContainer.css';

import Swipeable from "react-swipy";
import Button from './Button'

class SwipeCard extends Component {
  render()  {
    console.log(this.props);
    console.log(this.props.restaurant[0].location1.display_address.join())
    console.log(
  )

  return (
    <div>
    <div>
      <div className="SwipeCard">
      <h1 style = {{ color: "#f6d365"}}>{this.props.restaurant[0].name}</h1>
      <img className="RestImage" src = {this.props.restaurant[0].image}/>
      <h3><b> {this.props.restaurant[0].price}</b></h3>
      <div className="react-rater-star"><b>Rating: <Rater total={5} rating={this.props.restaurant[0].rating} interactive={false}/></b></div>
      <h4> Tags: {this.props.restaurant[0].tags.map(tag=>{
        return tag.alias}).join()}</h4>
      <h5>{this.props.restaurant[0].location1.display_address.join()}</h5>
      </div>
      <div className ="ButtonContainer">
        <Button
          onClick={this.props.dislike} className="Dislike"> <i className="fa fa-close fa-2x" style={{color:"grey"}}></i></Button>
        <Button
          onClick={(e)=> this.props.like(e,this.props.restaurant[0])}  className="Love"><i className="fa fa-heart fa-2x" style={{color:"red"}}></i></Button>
      </div>
    </div>
  </div>
    )
  }
  }


export default SwipeCard;
