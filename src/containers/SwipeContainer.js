import React, { Component } from 'react';
import '../layouts/SwipeContainer.css';
import Swipeable from "react-swipy";
import SwipeCard from "../components/SwipeCard"
import Card from '../components/Card'

import Button from '../components/Button'


import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const wrapperStyles = { position: "relative", width: "300px", height: "350px" }


const appStyles = {

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "Avenir",

};

const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
}

class SwipeContainer extends Component {

  swipeHandler = (direction) => {
    if (direction == "left"){
      this.props.dislike()
    }
    else{
      this.props.like("7",this.props.shortlist[0])
    }
  }


  state={
    currentCard: 0,
    cards: this.props.shortlist
  }


  remove = () =>
      this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render(){
  const { cards } = this.state;

  return (
      <div className="SwipeContainer">
        {this.props.shortlist.length > 0
          ?
    <div style={appStyles}>
    <div style={wrapperStyles}>
        {this.props.shortlist.length > 0 && (
        <div style={wrapperStyles}>

  <Swipeable
      buttons={({ right, left }) => (
      <div style={actionsStyles}>

    <Button
      onClick={left}>

      <i className="fa fa-close fa-2x" style={{color:"grey"}}></i>
    </Button>

    <Button
      onClick={right}>
      <i className="fa fa-heart fa-2x" style={{color:"red"}}></i>
    </Button>
  </div>
  )}
           onSwipe={this.swipeHandler}
           onAfterSwipe={this.remove}



           >

        <Card>
            <ul>
              <img className="RestImage" src = {this.props.shortlist[0].image}/>
               <h1 style = {{ color: "#f6d365"}}>{this.props.shortlist[0].name}</h1>
              <h3><b> {this.props.shortlist[0].price}</b></h3>
              <div className="react-rater-star"><b>Rating: <Rater total={5} rating={this.props.shortlist[0].rating} interactive={false}/></b></div>
              <p> Tags: {this.props.shortlist[0].tags.map(tag=>{
                return tag.alias}).join()}</p>
              <p>{this.props.shortlist[0].location1.display_address.join()}</p>
              </ul>
      </Card>
      </Swipeable>

          {this.props.shortlist.length > 1 &&
            <Card zIndex={-1}>
              {cards[1]}
            </Card>}
        </div>

      )}

    </div>
  </div>
        :
        <div>
        <h1> FILLING YOUR PLATE... </h1>
        <img src='https://i.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.webp'/>
        </div>}
      </div>
    )
  }
}

export default SwipeContainer;
