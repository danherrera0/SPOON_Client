import React from "react";
import '../layouts/SwipeContainer.css';

const cardStyles = {
  background: "white",
  borderRadius: 5,
  boxShadow: "0.25rem 0.125rem 0.25rem rgba(0, 0, 0, 0.25)",
  width: "275px",
  userSelect: "none",
  marginTop: "0px",
}
 // from the js library - React Swipe and Spring Hooks

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
)

export default Card;
// This page is for styling --- CSS --- the card functionality is in the SwipeContainer
