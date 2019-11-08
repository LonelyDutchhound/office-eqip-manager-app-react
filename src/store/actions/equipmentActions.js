import { ADD_EQUIPMENT, EDIT_EQUIPMENT, DELETE_EQUIPMENT } from "../constants";

const addEquipment = (id, name, count) => ({
  type: ADD_EQUIPMENT,
  id,
  name,
  count
});

const editEquipment = (_id, name, count) => ({
  type: EDIT_EQUIPMENT,
  _id,
  name,
  count
});

const deleteEquipment = (_id, name) => ({
  type: DELETE_EQUIPMENT,
  _id,
  name
});

export { addEquipment, editEquipment, deleteEquipment };
