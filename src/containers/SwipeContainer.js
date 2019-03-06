import React, { Component } from 'react';
import '../layouts/SwipeContainer.css';


import Swipeable from "react-swipy";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import SwipeCard from "../components/SwipeCard"

class SwipeContainer extends Component {

  state={
    currentCard: 0,
  }



  render(){



  return (
      <div className="SwipeContainer">
        {
        this.props.shortlist.length > 0 ?
        <SwipeCard like={this.props.like} dislike={this.props.dislike} restaurant={this.props.shortlist}/>
      :
      <div>
      <h1> FILLING YOUR PLATE... </h1>
      <img src='https://i.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.webp'/>
      </div>
    }
      </div>

    )
    }
  }

export default SwipeContainer;
