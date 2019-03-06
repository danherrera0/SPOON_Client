import React, { useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import CardiB from "../components/CardiB";

import "../layouts/Deck.css";

const cards = [1,2,3,4,5];

const objs = [
  {
    "id": 1,
    price: "$$",
    name: "Marcus' Marvelous Mission",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkhq4MedRShQCETfBICZ25TbjSJKKhpItGfZQwMoe8-QOLNdyDA",
    "yelp_link": "https://www.yelp.com/biz/upstate-new-york-2?adjust_creative=17OgVruqfQtyEby-qf7K-Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=17OgVruqfQtyEby-qf7K-Q",
    "tags": [
      {
        "alias": "seafood",
        "title": "Seafood"
      },
      {
        "alias": "wine_bars",
        "title": "Wine Bars"
      },
      {
        "alias": "beerbar",
        "title": "Beer Bar"
      }
    ],
    rating: 4,
    "coordinates": {
      "latitude": 40.7263139141197,
      "longitude": -73.9864901976935
    },
    location1: {
      "address1": "95 1st Ave",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10003",
      "country": "US",
      "state": "NY",
      "display_address": [
        "95 1st Aedfdfdsfve",
        "New York, NY 10003"
      ]
    },
    "categories": [

    ]
  },
  {
  "id": 1,
  price: "$$",
  name: "Dania's Deadbolted Door",
  image: "https://i5.walmartimages.com/asr/42e17692-5cd1-4e86-bf99-2364a29db303_1.55b97aa9f68caf7b300a3d82e3350b2f.jpeg",
  "yelp_link": "https://www.yelp.com/biz/upstate-new-york-2?adjust_creative=17OgVruqfQtyEby-qf7K-Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=17OgVruqfQtyEby-qf7K-Q",
  "tags": [
    {
      "alias": "seafood",
      "title": "Seafood"
    },
    {
      "alias": "wine_bars",
      "title": "Wine Bars"
    },
    {
      "alias": "beerbar",
      "title": "Beer Bar"
    }
  ],
  rating: 4,
  "coordinates": {
    "latitude": 40.7263139141197,
    "longitude": -73.9864901976935
  },
  location1: {
    "address1": "95 1st Ave",
    "address2": "",
    "address3": "",
    "city": "New York",
    "zip_code": "10003",
    "country": "US",
    "state": "NY",
    "display_address": [
      "95 1st Aedfdfdsfve",
      "New York, NY 10003"
    ]
  },
  "categories": [

  ]
},

  {
    "id": 1,
    price: "$$",
    name: "Diane's Dungeon",
    image: "https://cdn.getyourguide.com/img/tour_img-725977-146.jpg",
    "yelp_link": "https://www.yelp.com/biz/upstate-new-york-2?adjust_creative=17OgVruqfQtyEby-qf7K-Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=17OgVruqfQtyEby-qf7K-Q",
    "tags": [
      {
        "alias": "blood",
        "title": "blood"
      },
      {
        "alias": "wine_bars",
        "title": "Wine Bars"
      },
      {
        "alias": "beerbar",
        "title": "Beer Bar"
      }
    ],
    rating: 4,
    "coordinates": {
      "latitude": 40.7263139141197,
      "longitude": -73.9864901976935
    },
    location1: {
      "address1": "95 1st Ave",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10003",
      "country": "US",
      "state": "NY",
      "display_address": [
        "95 1st Ave",
        "New York, NY 10003"
      ]
    },
    "categories": [

    ]
  },
  {
    "id": 1,
    price: "$$",
    name: "Flatiron Funtime Foo",
    image: "https://flatiron-v3-production.imgix.net/Flatiron-School-67.jpg",
    "yelp_link": "https://www.yelp.com/biz/upstate-new-york-2?adjust_creative=17OgVruqfQtyEby-qf7K-Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=17OgVruqfQtyEby-qf7K-Q",
    "tags": [
      {
        "alias": "seafood",
        "title": "Seafood"
      },
      {
        "alias": "wine_bars",
        "title": "Wine Bars"
      },
      {
        "alias": "beerbar",
        "title": "Beer Bar"
      }
    ],
    rating: 4,
    "coordinates": {
      "latitude": 40.7263139141197,
      "longitude": -73.9864901976935
    },
    location1: {
      "address1": "95 1st Ave",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10003",
      "country": "US",
      "state": "NY",
      "display_address": [
        "95 1st Ave",
        "New York, NY 10003"
      ]
    },
    "categories": [

    ]
  },

  {
    "id": 1,
    price: "$$",
    name: "Upstate 1",
    image: "https://s3-media1.fl.yelpcdn.com/bphoto/RvnUVU7MF7DT0RzNL-EebQ/o.jpg",
    "yelp_link": "https://www.yelp.com/biz/upstate-new-york-2?adjust_creative=17OgVruqfQtyEby-qf7K-Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=17OgVruqfQtyEby-qf7K-Q",
    "tags": [
      {
        "alias": "seafood",
        "title": "Seafood"
      },
      {
        "alias": "wine_bars",
        "title": "Wine Bars"
      },
      {
        "alias": "beerbar",
        "title": "Beer Bar"
      }
    ],
    rating: 4,
    "coordinates": {
      "latitude": 40.7263139141197,
      "longitude": -73.9864901976935
    },
    location1: {
      "address1": "95 1st Ave",
      "address2": "",
      "address3": "",
      "city": "New York",
      "zip_code": "10003",
      "country": "US",
      "state": "NY",
      "display_address": [
        "95 1st Ave",
        "New York, NY 10003"
      ]
    },
    "categories": [

    ]
  }
];

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

function Deck() {
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
      objs={objs}
      bind={bind}
    />
  ));
}


export default Deck;
