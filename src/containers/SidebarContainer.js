import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard'

class SidebarContainer extends Component {
  render()  {
  return (
    <div>
    <div className="SidebarHeader">
      <h1 className="sidebar">Side Bar Container</h1>
      </div>
      <div className="SideBar">
      <RestaurantCard />

      </div>
    </div>
    )

    }
  }

export default SidebarContainer;
