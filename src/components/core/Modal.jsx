import React from "react";
import Portal from "./Portal";

const Modal = ({ on, children }) => (
  <Portal>
    {on && (
      <div role="button" className="Modal">
        <div>{children}</div>
      </div>
    )}
  </Portal>
);

export default Modal;
