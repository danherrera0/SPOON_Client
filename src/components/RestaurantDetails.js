import React, { Component } from 'react';
import MyMap from './MyMap'

import '../layouts/SidebarContainer.css';

class RestaurantDetails extends Component {
  render()  {
      // console.log(this.props.restaurant.name);
      return (
      <div>
        <div className="RestaurantDetails">
        <h3>{this.props.restaurant.name}</h3>
        <div className="resImg">
        <img src={this.props.restaurant.image} />
        </div>
        <h3> Address:{this.props.restaurant.location1.display_address} </h3>
        <button onClick={this.props.goBack} > Go back </button>
          <MyMap restaurant={this.props.restaurant}/>
        </div>
      </div>
      )
    }
  }

export default RestaurantDetails;
