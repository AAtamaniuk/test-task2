import React, { useState } from "react";
import Modal from "./core/Modal";
import HobbyInput from "./HobbyForm";
import DeleteModal from "./DeleteModal";

const HobbyColumn = ({ hobbies, onDelete, isUserSelected }) => {
  const [isConfirmOpen, setConfirm] = useState(false);
  const [hobbyId, setHobbyId] = useState("");
  const [hobbyText, setHobbyText] = useState("");

  const closeConfirm = () => setConfirm(false);
  const openConfirm = (id, text) => {
    setHobbyId(id);
    setHobbyText(text);
    setConfirm(true);
  };
  const handleDelete = () => {
    closeConfirm();
    onDelete(hobbyId);
  };

  if (!isUserSelected)
    return (
      <div className="HobbyColumn HobbyColumn--empty">
        <h2>Please select a user</h2>
      </div>
    );

  return (
    <div className="HobbyColumn">
      <HobbyInput />
      {hobbies.length === 0 && <h2>No hobbies yet</h2>}
      {hobbies.map(hobby => (
        <div className="HobbyCell" key={hobby.id}>
          <div className="HobbyCell-passion">Passion: {hobby.level}</div>
          <div className="HobbyCell-hobby">{hobby.text}</div>
          <div className="HobbyCell-since">Since {hobby.year}</div>
          <button
            className="HobbyCell-delete"
            onClick={() => openConfirm(hobby.id, hobby.text)}
          >
            x
          </button>
        </div>
      ))}
      <Modal on={isConfirmOpen}>
        <DeleteModal
          onClose={closeConfirm}
          onDelete={handleDelete}
          text={`Are you sure you want to delete hobby ${hobbyText}?`}
        />
      </Modal>
    </div>
  );
};

export default HobbyColumn;
