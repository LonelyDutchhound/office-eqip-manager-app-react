import React, { useState, useCallback, Fragment } from "react";
import { connect } from "react-redux";

import "./style.css";

const StructureUnit = ({unit}) => {
  const [isOpened, setIsOpened] = useState(false);
  const {name, rooms} = unit;
  return (
    <>
      <li className="list__item">{name}</li>
    </>
  );
};

export default connect(
  null,
  null
)(StructureUnit);
