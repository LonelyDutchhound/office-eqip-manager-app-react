import React, { useState } from "react";

const EquipmentUnit = ({ unit }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { _id, name, count } = unit;
  return <>{name ? <li>{name}</li> : null}</>;
};

export default EquipmentUnit;
