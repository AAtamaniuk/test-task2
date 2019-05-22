import React, { useState } from "react";
import { connect } from "react-redux";
import shortId from "shortid";
import { addUser } from "../redux/users.actions";
import AddButton from "./core/AddButton";
import Input from "./core/Input";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addUser({ id: shortId.generate(), name, hobbies: [] });
    setName("");
  };

  return (
    <form className="Cell Cell--input" onSubmit={handleSubmit}>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <AddButton />
    </form>
  );
};

export default connect(
  null,
  { addUser }
)(UserForm);
