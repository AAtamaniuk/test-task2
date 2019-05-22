import React, { useState } from "react";
import { connect } from "react-redux";
import shortId from "shortid";
import { addHobby } from "../redux/users.actions";
import AddButton from "./core/AddButton";
import Select from "./core/Select";
import Input from "./core/Input";

const HobbyForm = ({ addHobby }) => {
  const [level, setLevel] = useState("");
  const [text, setText] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addHobby({ id: shortId.generate(), level, text, year });
    setLevel("");
    setText("");
    setYear("");
  };

  const options = [
    { value: "Low", text: "Low" },
    { value: "Medium", text: "Medium" },
    { value: "High", text: "High" },
    { value: "Very-High", text: "Very-High" }
  ];

  return (
    <form className="HobbyCell HobbyCell--input" onSubmit={handleSubmit}>
      <Select
        value={level}
        onChange={e => setLevel(e.target.value)}
        placeholder="Select passion level"
        options={options}
      />
      <Input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter user hobby"
      />
      <Input
        value={year}
        onChange={e => setYear(e.target.value)}
        placeholder="Enter year"
      />
      <AddButton />
    </form>
  );
};

export default connect(
  null,
  { addHobby }
)(HobbyForm);
