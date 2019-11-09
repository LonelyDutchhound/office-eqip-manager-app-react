import React, { useState } from "react";
import { connect } from "react-redux";
import idArrayCreator from "../../utils/supportUtils/idArrayCreator";
import { showEquipment } from "../../store/actions/equipmentActions";

import "./style.css";
import OpenButton from "../OpenButton";

const StructureUnit = ({ unit, showRelEquipment }) => {
  const { name, rooms } = unit;
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleChange = () => {
    const equipIdArray = idArrayCreator(unit);
    showRelEquipment(equipIdArray);
  };

  const createSubUnit = () => {
    return rooms.map(room => (
      <StructureUnit
        unit={room}
        showRelEquipment={showRelEquipment}
        key={room.id}
      />
    ));
  };

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <li className="list__item" onClick={handleClick}>
        {rooms ? <OpenButton isOpened={isOpened} /> : null}
        <label className="item__label">

          <input
            className="item__selector"
            type="radio"
            name="unit"
            onChange={handleChange}
          />
          <p className="item__title">{name}</p>
        </label>
      </li>
      <ul className="panel__list">
        {isOpened && rooms && rooms.length !== 0 ? createSubUnit() : null}
      </ul>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  showRelEquipment: idArray => dispatch(showEquipment(idArray))
});

export default connect(
  null,
  mapDispatchToProps
)(StructureUnit);
