import React from "react";

const cardStyles = {
  background: "white",
  borderRadius: 3,
    boxShadow: "0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.25)",
  width: "350px",
  height: "375px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "left",
  justifyContent: "left",
  top: 0
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;
