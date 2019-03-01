import React, { Component } from 'react';
import RestaurantDetails from './RestaurantDetails'
import '../layouts/SidebarContainer.css';


class RestaurantCard extends Component {
  render()  {
  return (
    <div>
      <div className="RestaurantCard">
      <h3>Restuarant Card</h3>
      <RestaurantDetails />
      </div>
    </div>
    )

    }
  }

export default RestaurantCard;
