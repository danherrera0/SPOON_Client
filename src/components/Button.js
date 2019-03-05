import React from "react";

const buttonStyles = {
  padding: "16px 24px",
  // background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  cursor: "pointer",
  border: "none",
  borderRadius: 50,
  marginLeft:20,
  marginRight:20,
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;
