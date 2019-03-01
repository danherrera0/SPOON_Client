import React, { Component } from 'react';
import RestaurantDetails from "./RestaurantDetails"

class SwipeCard extends Component {
  render()  {
  return (
    <div>
      <div className="SwipeCard">
      <h3 > Swipe Card: Restuarant Card</h3>
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
