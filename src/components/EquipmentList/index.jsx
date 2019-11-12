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
  checkAddingOn
}) => {
  const equipmentUnit = !startText
    ? unitList.map(unit => <EquipmentUnit unit={unit} key={unit.id} />)
    : startText;

  const handleCancel = async () => {
    setIsAddingOn(false);
  };
  const handleClickAddButton = async () => {
    await setIsAddingOn(!checkAddingOn);
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
      {isRoom && !checkAddingOn ? (
        <SmallButton
          name="Добавить оборудование"
          className="panel__button_add"
          style={null}
          onClick={handleClickAddButton}
        />
      ) : null}
      {checkAddingOn ? addUnit : null}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setIsAddingOn: isAdding => dispatch(isAddingOn(isAdding))
});

const mapStateToProps = state => ({
  checkAddingOn: state.isAddingOn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentList);
