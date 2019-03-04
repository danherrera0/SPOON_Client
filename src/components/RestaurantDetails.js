import React, { Component } from 'react';
import Map from './Map'

import '../layouts/SidebarContainer.css';

class RestaurantDetails extends Component {
  render()  {

  return (
    <div>
      <div className="RestaurantDetails">
      <h3>{this.props.restaurant.name}</h3>
      <img src={this.props.restaurant.image} />
      <p> Address:{this.props.restaurant.location1.display_address} </p>
      <button onClick={this.props.goBack} > Go back </button>

        <Map
         />
      </div>


    </div>

    )

    }
  }

export default RestaurantDetails;
