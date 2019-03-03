import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard'
import SidebarHeader from '../components/SidebarHeader'

import '../layouts/SidebarContainer.css';

class SidebarContainer extends Component {
  render()  {
  return (
    <div class="SidebarContainer">
    <div className="SidebarHeader">

      <SidebarHeader
         />
      </div>
      <div className="SideBar">
      <RestaurantCard />


      </div>
    </div>
    )

    }
  }

export default SidebarContainer;
