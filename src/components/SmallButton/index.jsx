import React from "react";

import "./style.css";

const SmallButton = ({ style, onClick, name }) => {
  return (
    <button
      type="button"
      className="item__button"
      style={style}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default SmallButton;
