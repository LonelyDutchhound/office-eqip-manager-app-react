import React, { useState } from "react";
import { connect } from "react-redux";
import SmallButton from "../SmallButton";
import QuantityInput from "../QuantityInput";
import { RED, BLUE, GREEN } from "../styleConstants";
import {
  deleteEquipment,
  editEquipment
} from "../../store/actions/equipmentActions";

const EquipmentUnit = ({
  unit,
  editEquipQuantity,
  deleteEquipmentItem,
  isRoom
}) => {
  const { id, name, count, room } = unit;
  const [quantity, setQuantity] = useState(count);
  const [isEditable, setEditable] = useState(false);

  const handleChange = e => setQuantity(e.target.value);

  const handleClickEdit = () => {
    if (isEditable) editEquipQuantity(id, name, quantity, room);
    setEditable(!isEditable);
  };

  const handleClickDelete = () => {
    deleteEquipmentItem(id);
  };

  return (
    <>
      <li className="list__item">
        <p className="item__title">{name}</p>
        <QuantityInput
          readOnly={!isEditable}
          quantity={quantity}
          onChange={handleChange}
        />
        {isRoom ? (
          <>
            <SmallButton
              className="item__button"
              style={{ backgroundColor: isEditable ? GREEN : BLUE }}
              name={isEditable ? "\u2611" : "\u270E"}
              onClick={handleClickEdit}
            />
            <SmallButton
              className="item__button"
              style={{ backgroundColor: RED }}
              name={"\u1CF5"}
              onClick={handleClickDelete}
            />
          </>
        ) : null}
      </li>
    </>
  );
};

const mapStateToProps = state => ({
  isRoom: state.isRoom
});

const mapDispatchToProps = dispatch => ({
  editEquipQuantity: (id, name, count, room) =>
    dispatch(editEquipment(id, name, count, room)),
  deleteEquipmentItem: id => dispatch(deleteEquipment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentUnit);
