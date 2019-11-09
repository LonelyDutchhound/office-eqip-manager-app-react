import React from "react";
import "./style.css";

import EquipmentUnit from "../EquipmentUnit";

const EquipmentList = ({ unitList, instText }) => {
  const equipmentUnit = !instText
    ? unitList.map(unit => <EquipmentUnit unit={unit} key={unit.id} />)
    : instText;
  return (
    <div className="panel">
      <ul className="panel__list">{equipmentUnit}</ul>
    </div>
  );
};

export default EquipmentList;
