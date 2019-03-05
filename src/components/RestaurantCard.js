import React, { Component } from 'react';
import RestaurantDetails from './RestaurantDetails'
import '../layouts/SidebarContainer.css';




class RestaurantCard extends Component {


  render()  {
  return (
    <div>
      <div className="RestaurantCard">
      <img id="img-profile" className="img-circle" src={this.props.restaurant.image} />
      <h5>{this.props.restaurant.name}</h5><br/>
      <button className="showDetailsBut" onClick={(e)=>this.props.clickHandler(e, this.props.restaurant)}>
      <i class="fa fa-cutlery fa-2x" style={{color:"orange"}}></i></button>
      <i onClick={(e)=> this.props.removeRest(e, this.props.restaurant)}
        className="fa fa-close fa-2x" style={{color:"red"}}></i>
      </div>

    </div>
    )

    }
  }

export default RestaurantCard;
