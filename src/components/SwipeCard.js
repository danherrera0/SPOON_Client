import React, { Component } from 'react';
import RestaurantDetails from "./RestaurantDetails"
import '../layouts/SwipeContainer.css';


class SwipeCard extends Component {
  render()  {
    console.log(this.props.restaurant);
  return (
    <div>
      <div className="SwipeCard">
      <h3>{this.props.restaurant.name}</h3>
      <img src = "https://www.tri-cityherald.com/customer-service/faq/readers-choice/tktlqu/picture212621614/alternates/FREE_1140/PC18-five%20guys"  style = {{width: "251px",  height: "201px"}} />
      <RestaurantDetails/>
      </div>
      <div className ="ButtonContainer">
        <button className="Dislike">Not My Taste</button>
        <button className="Starred">Must Go</button>
        <button className="Love">Put It On My Plate</button>
      </div>
    </div>
    )
  }
  }


export default SwipeCard;
