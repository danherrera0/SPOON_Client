import React, { Component } from 'react';
import '../layouts/SwipeContainer.css';
import { Card, CardWrapper } from 'react-swipeable-cards';
import { render } from 'react-dom';

import Swipeable from "react-swipy";
import SwipeCard from "../components/SwipeCard"

const wrapperStyles = { position: "relative", width: "300px", height: "350px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};


class SwipeContainer extends Component {

  state={
    currentCard: 0,
  }
  render(){


  return (


      <div className="SwipeContainer">
        <CardWrapper>
           <Card>
             Hello World!
           </Card>
         </CardWrapper>
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
