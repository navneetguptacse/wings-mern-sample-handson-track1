import React from "react";
import "../App.css";

/**
 * Simple reusable modal component.
 * Props:
 *  - show: boolean
 *  - closeHandler: () => void
 *  - children: React content
 */
const Modal = ({ show, closeHandler, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" data-testid="modal-overlay">
      <div className="modal-body">
        <button
          type="button"
          className="modal-close"
          onClick={closeHandler}
          data-testid="modal-close-btn"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
