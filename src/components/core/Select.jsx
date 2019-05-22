import React from "react";

const Select = ({ value, onChange, placeholder, options }) => {
  const isEmpty = value === "";
  return (
    <select
      className={`Input ${isEmpty ? "Input--empty" : ""}`}
      value={value}
      onChange={onChange}
    >
      <option disabled value="">
        {placeholder}
      </option>
      {options.map(option => {
        return (
          <option
            key={option.value}
            value={option.value}
            className="Input_option"
          >
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
