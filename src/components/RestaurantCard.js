import React, { Component } from 'react';
import RestaurantDetails from './RestaurantDetails'
import '../layouts/SidebarContainer.css';

import Map from './Map'


class RestaurantCard extends Component {
  render()  {
  return (
    <div>
      <div className="RestaurantCard">
      <h3>Restuarant Card</h3>
      <RestaurantDetails />
      <Map />
      </div>
    </div>
    )

    }
  }

export default RestaurantCard;
