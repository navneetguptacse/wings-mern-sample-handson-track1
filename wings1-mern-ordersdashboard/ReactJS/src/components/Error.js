import React from "react";
import "../styles/error.css";

/**
 * Error component.
 * Props:
 * - message: string
 * If message is falsy, nothing should be rendered.
 */
const Error = ({ message }) => {
  if (!message) return null;

  return <div className="error-message" data-testid="error-text">{message}</div>;
};

export default Error;
