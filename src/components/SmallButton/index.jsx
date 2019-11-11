import React from "react";
import "./style.css";

const SmallButton = ({ style, onClick, name, className }) => {
  return (
    <button type="button" className={className} style={style} onClick={onClick}>
      {name}
    </button>
  );
};

export default SmallButton;
