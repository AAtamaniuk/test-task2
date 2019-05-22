import React from "react";
import Button from "./core/Button";

const DeleteModal = ({ onDelete, onClose, text }) => {
  return (
    <div className="DeleteModal">
      <h2>{text}</h2>
      <Button type="button" variant="danger" onClick={onDelete}>
        Delete
      </Button>
      <Button type="button" onClick={onClose}>
        Cancel
      </Button>
    </div>
  );
};

export default DeleteModal;
