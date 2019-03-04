import React, { Component } from 'react';
import RestaurantDetails from './RestaurantDetails'
import '../layouts/SidebarContainer.css';




class RestaurantCard extends Component {


  render()  {
    console.log(this.props.name);
  return (
    <div>
      <div className="RestaurantCard">
      <h3>{this.props.restaurant.name}</h3>
      <button onClick={(e)=>this.props.clickHandler(e, this.props.restaurant)}> Show Details </button>
      

      </div>

    </div>
    )

    }
  }

export default RestaurantCard;
