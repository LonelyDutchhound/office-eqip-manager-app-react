import React, { useState } from "react";
import { connect } from "react-redux";
import SmallButton from "../SmallButton";
import { RED, BLUE, GREEN } from "../styleConstants";
import "./style.css";
import {
  deleteEquipment,
  editEquipment
} from "../../store/actions/equipmentActions";

const EquipmentUnit = ({ unit, editEquipQuantity, deleteEquipmentItem }) => {
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
        <input
          readOnly={!isEditable}
          className="item__quantity"
          type="number"
          value={quantity}
          min="1"
          onChange={handleChange}
        />
        <SmallButton
          style={{ backgroundColor: isEditable ? GREEN : BLUE }}
          name={isEditable ? "\u2611" : "\u270E"}
          onClick={handleClickEdit}
        />
        <SmallButton
          style={{ backgroundColor: RED }}
          name={"\u1CF5"}
          onClick={handleClickDelete}
        />
      </li>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  editEquipQuantity: (id, name, count, room) =>
    dispatch(editEquipment(id, name, count, room)),
  deleteEquipmentItem: id => dispatch(deleteEquipment(id))
});

export default connect(
  null,
  mapDispatchToProps
)(EquipmentUnit);
