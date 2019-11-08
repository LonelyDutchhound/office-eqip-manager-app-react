import React, { useState } from "react";
import { connect } from "react-redux";

import "./style.css";
import { RED, GREEN } from "../styleConstants";

import { idArrayCreator } from "../../utils/idArrayCreator";
import { showEquipment } from "../../store/actions/equipmentActions";

const StructureUnit = ({ unit, showRelEquipment }) => {
  const [isOpened, setIsOpened] = useState(false);

  const { name, rooms } = unit;

  const handleClick = () => {
    setIsOpened(!isOpened);
    const equipIdArray = idArrayCreator(unit);
    showRelEquipment(equipIdArray);
  };

  let subUnit = null;
  if (isOpened && rooms && rooms.length !== 0) {
    subUnit = rooms.map(room => <StructureUnit unit={room} showRelEquipment={showRelEquipment} key={room.id} />);
  }

  let openButton = null;
  if (rooms)
    openButton = (
      <div
        type="button"
        className="item__button"
        style={isOpened ? { backgroundColor: RED } : { backgroundColor: GREEN }}
      >
        {isOpened ? "\u25BD" : "\u25B7"}
      </div>
    );

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <li className="list__item" onClick={handleClick}>
        {openButton}
        <p className="item__name">{name}</p>
      </li>
      <ul className="panel__list">{subUnit}</ul>
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
