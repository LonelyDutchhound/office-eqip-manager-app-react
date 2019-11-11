import React, { useState } from "react";
import "./style.css";
import EquipmentUnit from "../EquipmentUnit";
import SmallButton from "../SmallButton";
import AddUnit from "../AddUnit";

const EquipmentList = ({ unitList, startText, isRoom }) => {
  const equipmentUnit = !startText
    ? unitList.map(unit => <EquipmentUnit unit={unit} key={unit.id} />)
    : startText;

  const [isAdding, setIsAdding] = useState(false);

  const handleCancel = () => {
    setIsAdding(false);
  };
  const handleClickAddButton = () => {
    setIsAdding(!isAdding);
  };
  const addUnit = (
    <AddUnit
      handleCancel={handleCancel}
      handleClickAddButton={handleClickAddButton}
    />
  );
  return (
    <div className="panel">
      <ul className="panel__list">{equipmentUnit}</ul>
      {isRoom && !isAdding ? (
        <SmallButton
          name="Добавить оборудование"
          className="panel__button_add"
          style={null}
          onClick={handleClickAddButton}
        />
      ) : null}
      {isAdding ? addUnit : null}
    </div>
  );
};

export default EquipmentList;
