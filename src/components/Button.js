import React from "react";

const buttonStyles = {
  padding: "16px 24px",
  cursor: "pointer",
  border: "none",
  borderRadius: 50,
  marginLeft:20,
  marginRight:20
}

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
)

export default Button;
