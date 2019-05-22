import React from "react";

const AddButton = ({ onClick, disabled }) => {
  return (
    <button className="AddButton" onClick={onClick} disabled={disabled}>
      Add
    </button>
  );
};

export default AddButton;
