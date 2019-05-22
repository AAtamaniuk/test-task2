import React from "react";

const Button = ({ children, onClick, variant, type }) => {
  const classes = {
    success: "Button--success",
    danger: "Button--danger"
  }[variant];

  return (
    <button
      type={type || "button"}
      className={`Button ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
