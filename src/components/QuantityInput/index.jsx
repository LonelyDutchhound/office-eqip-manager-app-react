import React from "react";
import "./style.css";

const QuantityInput = ({ readOnly, quantity, onChange }) => {
  return (
    <input
      readOnly={readOnly}
      className="item__quantity"
      type="number"
      value={quantity}
      min="1"
      onChange={onChange}
    />
  );
};

export default QuantityInput;
