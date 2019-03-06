import React, { useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import CardiB from "../components/CardiB";
import "../layouts/Deck.css";



const Deck = (props1) => {

  const cards = [1];

  const to = i => ({
    x: 0,
    y: i * -10,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100
  });
  const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

  const trans = (r, s) =>
    `perspective(2500px) rotateX(25deg) rotateY(${r /
      10}deg) rotateZ(${r}deg) scale(${s})`;
      const [gone] = useState(() => new Set());

      const [props, set] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(i)
      }));

      const bind = useGesture(
        ({
          args: [index],
          down,
          delta: [xDelta],
          distance,
          direction: [xDir],
          velocity
        }) => {
          const trigger = velocity > 0.2;

          const dir = xDir < 0 ? -1 : 1;

          if (!down && trigger) gone.add(index);

          set(i => {
            if (index !== i) return;
            const isGone = gone.has(index);

            const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

            const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

            const scale = down ? 1.1 : 1;
            return {
              x,
              rot,
              scale,
              delay: undefined,
              config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
            };
          });

          if (!down && gone.size === cards.length)
            setTimeout(() => gone.clear() || set(i => to(i)), 600);
        }
      );


  return props.map(({ x, y, rot, scale }, i) => (

    <CardiB
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      cards={cards}
      objs={this.props.shortlist}
      bind={bind}
    />
  ));
}

}

export default Deck2
