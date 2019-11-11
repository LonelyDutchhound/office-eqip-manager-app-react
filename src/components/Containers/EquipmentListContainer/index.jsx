import React from "react";
import { connect } from "react-redux";
import EquipmentList from "../../EquipmentList";

const EquipmentListContainer = ({ equipment, showEquipArray, isRoom }) => {
  const startText = (
    <p className="message">
      Выберите здание/помещение для просмотра оборудования
    </p>
  );

  if (showEquipArray.length === 0)
    return <EquipmentList unitList={null} startText={startText} />;
  const equipUnitList = Object.entries(equipment).reduce((accum, next) => {
    const [key, value] = next;
    if (showEquipArray.includes(key)) return [...accum, ...value];
    return accum;
  }, []);
  return <EquipmentList unitList={equipUnitList} isRoom={isRoom} />;
};

const mapStateToProps = state => ({
  equipment: state.equipment,
  showEquipArray: state.showEquipArray,
  isRoom: state.isRoom
});

export default connect(mapStateToProps)(EquipmentListContainer);
