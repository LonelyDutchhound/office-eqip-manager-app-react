import React, { useState } from "react";
import { connect } from "react-redux";
import "./style.css";
import EquipmentUnit from "../EquipmentUnit";
import SmallButton from "../SmallButton";
import AddUnit from "../AddUnit";
import { isAddingOn } from "../../store/actions/equipmentActions";

const EquipmentList = ({ unitList, startText, isRoom, setIsAddingOn }) => {
  const equipmentUnit = !startText
    ? unitList.map(unit => <EquipmentUnit unit={unit} key={unit.id} />)
    : startText;

  const [isAdding, setIsAdding] = useState(false);

  const handleCancel = async () => {
    await setIsAdding(false);
    setIsAddingOn(!isAdding);
  };
  const handleClickAddButton = async () => {
    await setIsAdding(!isAdding);
    setIsAddingOn(!isAdding);
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

const mapDispatchToProps = dispatch => ({
  setIsAddingOn: isAdding => dispatch(isAddingOn(isAdding))
});

export default connect(
  null,
  mapDispatchToProps
)(EquipmentList);
