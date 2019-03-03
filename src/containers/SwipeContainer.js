import React, { Component } from 'react';
import '../layouts/SwipeContainer.css';
import SwipeCard from "../components/SwipeCard"

class SwipeContainer extends Component {
  state={
    currentCard: 0,
  }

  render(){



  return (
    <div className="SwipeContainer">
      {<SwipeCard restaurant={this.props.restaurants}/>}
    </div>
    )
    }
  }

export default SwipeContainer;
