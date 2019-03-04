import React, { Component } from 'react';
import RestaurantDetails from "./RestaurantDetails"
import '../layouts/SwipeContainer.css';


class SwipeCard extends Component {
  render()  {
    console.log(this.props);
    console.log(this.props.restaurant[0].location1.display_address.join())
    console.log(
  )

  return (
    <div>
      <div className="SwipeCard">
      <h2>{this.props.restaurant[0].name}</h2>
      <img src = {this.props.restaurant[0].image} style = {{width: "251px",  height: "201px"}} />
      <p> Rating: {this.props.restaurant[0].rating}</p>
      <p> Tags: {this.props.restaurant[0].tags.map(tag=>{
        return tag.alias}).join()}</p>
      <p>{this.props.restaurant[0].location1.display_address.join()}</p>
      </div>
      <div className ="ButtonContainer">
        <button onClick={this.props.dislike} className="Dislike">Not My Taste</button>
        <button onClick={(this.props.restaurant)=> this.props.like()} className="Love">Put It On My Plate</button>
      </div>
    </div>
    )
  }
  }


export default SwipeCard;
