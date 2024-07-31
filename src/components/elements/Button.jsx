import React from "react";

const Button = ({ onClick, className, type, children }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white shadow-btnShadow    border  bg-primary rounded-lg ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
