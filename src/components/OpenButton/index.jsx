import React from "react";
import { GREEN, RED } from "../styleConstants";
import "./style.css";

const OpenButton = ({isOpened}) => {
  return (
    <div
      type="button"
      className="item__button"
      style={isOpened ? { backgroundColor: RED } : { backgroundColor: GREEN }}
    >
      {isOpened ? "\u25BD" : "\u25B7"}
    </div>
  );
};

export default OpenButton;
