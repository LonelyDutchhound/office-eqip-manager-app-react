import React from "react";
import "./style.css";

import StructureUnit from "../StructureUnit";

const StructureList = ({ unitList }) => {
  const structureUnit = unitList.map(unit => (
    <StructureUnit unit={unit} key={unit.id} />
  ));
  return (
    <div className="panel">
      <ul className="panel__list">{structureUnit}</ul>
    </div>
  );
};

export default StructureList;
