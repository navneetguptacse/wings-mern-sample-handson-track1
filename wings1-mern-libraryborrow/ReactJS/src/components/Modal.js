import React from "react";
import Button from "./Button";
import "../styles/modal.css";

/**
 * Modal component.
 * Props:
 * - show: boolean
 * - children: ReactNode (form content)
 * - closeHandler: function
 */
const Modal = ({ show, children, closeHandler }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop" data-testid="modal">
      <div className="modal-content">
        <div className="modal-header">
          <Button label="Close" onClick={closeHandler} />
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
