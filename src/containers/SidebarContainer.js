import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard'
import SidebarHeader from '../components/SidebarHeader'
import RestaurantDetails from '../components/RestaurantDetails'

import '../layouts/SidebarContainer.css';

class SidebarContainer extends Component {

  state={
    clicked:false,
    chosenRestaurant:{},
  }
  onClick=(e, restaurant)=>{
    this.setState({
      clicked:true,
      chosenRestaurant:restaurant,
    })
  }

  goBack=()=>{
    this.setState({
      chosenRestaurant:{}
    })
  }
// (Object.keys(this.state.chosenRestaurant)
//   removeRest: (restaurant) => {
//   const newRest = this.state.chosenRestaurant
//   this.setState({
//
//   })
// }

// delete rest use filter to change array
// pass in state object
// removeRest = (e, restaurant) => {
//   console.log(this.state.likedRestaurants)
//   // this.setState({
//   //   chosenRestaurant: [...this.state.likedRestaurants.filter(likedRestaurant => likedRestaurant.id !== this.state.chosenRestaurant.id)]
//   // });
//
// }
  render()  {

  return (
    <div className="SidebarContainer">
    <div className="SidebarHeader">

      <SidebarHeader
         />
      </div>
      <div className="SideBar">

      {(Object.keys(this.state.chosenRestaurant).length > 0)
        ?
        <RestaurantDetails goBack={this.goBack} restaurant={this.state.chosenRestaurant}/>
        :
        this.props.likedRestaurants.map(restaurant=>{
        return (
          <RestaurantCard
          clickHandler={this.onClick}
          removeRest={this.props.removeRest}
          restaurant={restaurant}  />
        )
      })}

      </div>
    </div>
    )

    }
  }

export default SidebarContainer;
