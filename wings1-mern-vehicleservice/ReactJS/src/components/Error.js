import React from "react";

const Error = ({ message }) => {
  if (!message) return null;
  return <div className="error-message" role="alert">{message}</div>;
};

export default Error;
