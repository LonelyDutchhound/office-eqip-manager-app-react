import React, { useState } from "react";
import { connect } from "react-redux";
import "./style.css";
import TextInput from "../TextInput";
import QuantityInput from "../QuantityInput";
import SmallButton from "../SmallButton";
import { GREEN, RED } from "../styleConstants";
import { addEquipment } from "../../store/actions/equipmentActions";

const AddUnit = ({ handleCancel, handleClickAddButton, addNewEquipment }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [error, setError] = useState(false);

  const errorMessage = "Введите правильные данные или отмените операцию";

  const onTextChange = ({ target: { value } }) => setName(value);
  const onQuantityChange = ({ target: { value } }) => setQuantity(value);
  const handleClickAdd = () => {
    if (name && name.match(/^[А-Яа-я]+[0-9]*/) && quantity > 0) {
      setError(false);
      addNewEquipment(name, quantity);
      handleClickAddButton();
    } else setError(true);
  };

  return (
    <div className="list__wrapper">
      <div className="list__item">
        <TextInput value={name} onChange={onTextChange} />
        <QuantityInput
          readOnly={false}
          quantity={quantity}
          onChange={onQuantityChange}
        />
        <SmallButton
          className="item__button"
          style={{ backgroundColor: GREEN }}
          name={"\u2611"}
          onClick={handleClickAdd}
        />
        <SmallButton
          className="item__button"
          style={{ backgroundColor: RED }}
          name={"\u1CF5"}
          onClick={handleCancel}
        />
      </div>
      <p className="list__error">{error ? errorMessage : null}</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewEquipment: (name, quantity) => dispatch(addEquipment(name, quantity))
});

export default connect(
  null,
  mapDispatchToProps
)(AddUnit);
