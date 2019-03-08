import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
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
//
//   getPosition =()=>{
//     var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//     }
//   function success(pos) {
//     var crd = pos.coords;
//     let latitude =  crd.latitude
//     let longitude = crd.longitude
//     let coordinates = [latitude, longitude]
//   }
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
//   navigator.geolocation.getCurrentPosition(success, error, options);
// }


  render()  {
    return (
      <div className="SidebarContainer">
      <div className="SidebarHeader">
        <div className="position">

        </div>
        <SidebarHeader/>
        </div>
        <div className="SideBar">
        {(Object.keys(this.state.chosenRestaurant).length > 0)
          ? <RestaurantDetails goBack={this.goBack} restaurant={this.state.chosenRestaurant}/>
          :this.props.likedRestaurants.map(restaurant=>{
            return (
            <RestaurantCard
            clickHandler={this.onClick}
            removeRest={this.props.removeRest}
            restaurant={restaurant} />
            )
          })
        }
        </div>
      </div>
    )
  }//end of render

}//end of class

export default withRouter(SidebarContainer);
