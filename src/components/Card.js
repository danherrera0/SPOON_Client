import React from "react";
import '../layouts/SwipeContainer.css';

const cardStyles = {
  background: "white",
  // display: "block",
  borderRadius: 5,
  boxShadow: "0.25rem 0.125rem 0.25rem rgba(0, 0, 0, 0.25)",
  width: "275px",
  height: "400px",
  // cursor: "pointer",
  userSelect: "none",
  position: "relative",
  // display: "flex",
  // alignItems: "left",
  // justifyContent: "left",
  top: 0
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}

  </div>
);

export default Card;
