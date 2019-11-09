import React from "react";
import { connect } from "react-redux";
import EquipmentList from "../../EquipmentList";

const EquipmentListContainer = ({ equipment, showEquipArray }) => {
  if (showEquipArray.length === 0)
    return (
      <EquipmentList unitList={null} instText="Выберите здание/помещение для просмотра оборудования" />
    );
  const equipUnitList = Object.entries(equipment).reduce((accum, next) => {
    const [key, value] = next;
    if (showEquipArray.includes(key)) return [...accum, ...value];
    return accum;
  }, []);
  return <EquipmentList unitList={equipUnitList} />;
};

const mapStateToProps = state => ({
  equipment: state.equipment,
  showEquipArray: state.showEquipArray
});

export default connect(mapStateToProps)(EquipmentListContainer);
