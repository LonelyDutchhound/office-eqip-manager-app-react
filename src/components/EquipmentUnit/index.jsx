import React from "react";

const EquipmentUnit = ({ unit }) => {
  const { name } = unit;
  return <>{name ? <li>{name}</li> : null}</>;
};

export default EquipmentUnit;
