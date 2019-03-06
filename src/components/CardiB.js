import React from "react";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

class CardiB extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    // const { name, price, rating, image} = objs[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <Carousel>
              <img src={this.props.objs[i].image} />
            </Carousel>

            <h2>{this.props.objs[i].name},</h2>
            <p>{this.props.objs[i].price}</p>
            <div className="react-rater-star"><b>Rating: <Rater total={5} rating={this.props.objs[i].rating} interactive={false}/></b></div>
            <p>{this.props.objs[i].location1.display_address.join()}</p>

          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default CardiB;
