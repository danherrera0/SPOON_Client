import React, { Component } from 'react';
import MyMap from './MyMap'

import '../layouts/SidebarContainer.css';

class RestaurantDetails extends Component {
  render()  {
    console.log(this.props.restaurant.name);
  return (
    <div>
      <div className="RestaurantDetails">
      <h3>{this.props.restaurant.name}</h3>
      <img src={this.props.restaurant.image} />
      <p> Address:{this.props.restaurant.location1.display_address} </p>
      <button onClick={this.props.goBack} > Go back </button>

        <MyMap restaurant={this.props.restaurant}

         />
      </div>


    </div>

    )

    }
  }

export default RestaurantDetails;
