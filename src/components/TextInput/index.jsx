import React from "react";
import "./style.css";

const TextInput = ({ name, onChange, isInputError }) => {
  return (
    <input
      style={isInputError}
      className="item__input"
      type="text"
      value={name}
      onChange={onChange}
      placeholder="Наименование"
    />
  );
};

export default TextInput;
