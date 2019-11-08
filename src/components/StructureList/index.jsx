import React, { useState, useCallback } from "react";
import "./style.css";

import StructureUnit from "../StructureUnit";

const StructureList = ({ unitList }) => {
  const [isOpened, setIsOpened] = useState(false);
  const structureUnit = unitList.map(unit => <StructureUnit unit={unit} />);
  return (
    <div className="panel">
      <ul className="panel__list">{structureUnit}</ul>
    </div>
  );
};

export default StructureList;
