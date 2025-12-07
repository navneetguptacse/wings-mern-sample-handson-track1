import React from "react";
import "../styles/modal.css";

const Modal = ({ show, children, closeHandler }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop" data-testid="modal">
      <div className="modal-content">
        <button
          type="button"
          onClick={closeHandler}
          aria-label="Close modal"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
