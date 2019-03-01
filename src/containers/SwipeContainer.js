import React, { Component } from 'react';
import '../layouts/SwipeContainer.css';
import SwipeCard from "../components/SwipeCard"

class SwipeContainer extends Component {
  render()  {
  return (
    <div className="SwipeContainer">
      <h1>SWIPEContainer</h1>
      <SwipeCard />
    </div>
    )

    }
  }

export default SwipeContainer;
