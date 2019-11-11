import React, { useState } from "react";
import { connect } from "react-redux";
import idArrayCreator from "../../utils/supportUtils/idArrayCreator";
import { setRoom, showEquipment } from "../../store/actions/equipmentActions";
import SmallButton from "../SmallButton";
import { GREEN, RED } from "../styleConstants";
import "./style.css";

const StructureUnit = ({ unit, showRelEquipment, setIsRoom, isAddingOn }) => {
  const { name, rooms, id } = unit;
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleChange = () => {
    const equipIdArray = idArrayCreator(unit);
    if (unit.rooms) setIsRoom(false);
    else setIsRoom(id);
    showRelEquipment(equipIdArray);
  };

  const createSubUnit = () => {
    return rooms.map(room => (
      <StructureUnit
        unit={room}
        showRelEquipment={showRelEquipment}
        setIsRoom={setIsRoom}
        isAddingOn={isAddingOn}
        key={room.id}
      />
    ));
  };

  return (
    <>
      <li className="list__item">
        {rooms ? (
          <SmallButton
            className="item__button"
            style={
              isOpened ? { backgroundColor: RED } : { backgroundColor: GREEN }
            }
            name={isOpened ? "\u25BD" : "\u25B7"}
            onClick={handleClick}
          />
        ) : null}
        <label className="item__label" htmlFor={id}>
          <input
            id={id}
            className="item__selector"
            type="radio"
            name="unit"
            disabled={isAddingOn}
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

const mapStateToProps = state => ({
  isAddingOn: state.isAddingOn
});

const mapDispatchToProps = dispatch => ({
  showRelEquipment: idArray => dispatch(showEquipment(idArray)),
  setIsRoom: isRoom => dispatch(setRoom(isRoom))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StructureUnit);
