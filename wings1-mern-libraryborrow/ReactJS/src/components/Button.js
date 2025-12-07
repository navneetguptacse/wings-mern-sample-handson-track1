import React from "react";
import "../styles/button.css";

/**
 * Reusable Button component.
 * Props:
 * - label: string - text to display inside the button
 * - type: 'button' | 'submit' | 'reset' (optional)
 * - onClick: function - click handler
 */
const Button = ({ label, type = "button", onClick, ...rest }) => {
  return (
    <button
      type={type}
      className="btn"
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
