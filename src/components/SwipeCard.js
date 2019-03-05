import React, { Component } from 'react';
import RestaurantDetails from "./RestaurantDetails"

import '../layouts/SwipeContainer.css';

import Button from './Button'

class SwipeCard extends Component {
  render()  {


  return (
    <div>

    <div style={{position: "absolute", width: "400px", height: "550px"}}>


      <div className="SwipeCard">
      <img className="RestImage" src = {this.props.restaurant[0].image} style = {{width: "352px",  height: "300px", borderRadius: "0.7rem"}} />
          <h1 style = {{ color: "#f6d365"}}>{this.props.restaurant[0].name}</h1>
      <p> {this.props.restaurant[0].price} </p>
      <p> Rating: {this.props.restaurant[0].rating}</p>
      <p> Tags: {this.props.restaurant[0].tags.map(tag=>{
        return tag.alias}).join()}</p>
      <p>{this.props.restaurant[0].location1.display_address.join()}</p>
      </div>
      <div className ="ButtonContainer">
        <Button onClick={this.props.dislike} className="Dislike">  Not My Taste  </Button>
        <Button onClick={(e)=> this.props.like(e,this.props.restaurant[0])}  className="Love"><i className="fa fa-heart fa-2x" style={{color:"red"}}></i></Button>
        <h1 style={{marginLeft:"50"}}>Put It On My Plate</h1>
      </div>

    </div>

  </div>
    )
  }
  }


export default SwipeCard;
