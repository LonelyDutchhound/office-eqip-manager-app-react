import React from "react";
import { connect } from "react-redux";
import "./style.css";
import EquipmentUnit from "../EquipmentUnit";
import SmallButton from "../SmallButton";
import AddUnit from "../AddUnit";
import { isAddingOn } from "../../store/actions/equipmentActions";

const EquipmentList = ({
  unitList,
  startText,
  isRoom,
  setIsAddingOn,
  AddIsOn
}) => {
  const equipmentUnit = !startText
    ? unitList.map(unit => <EquipmentUnit unit={unit} key={unit.id} />)
    : startText;

  const handleCancel = async () => {
    setIsAddingOn(false);
  };
  const handleClickAddButton = async () => {
    await setIsAddingOn(!AddIsOn);
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
      {isRoom && !AddIsOn ? (
        <SmallButton
          name="Добавить оборудование"
          className="panel__button_add"
          style={null}
          onClick={handleClickAddButton}
        />
      ) : null}
      {AddIsOn ? addUnit : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setIsAddingOn: isAdding => dispatch(isAddingOn(isAdding))
});

const mapStateToProps = state => ({
  AddIsOn: state.isAddingOn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentList);
