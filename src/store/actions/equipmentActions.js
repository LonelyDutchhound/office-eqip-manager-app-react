import {
  SHOW_EQUIPMENT,
  ADD_EQUIPMENT,
  EDIT_EQUIPMENT,
  DELETE_EQUIPMENT
} from "../constants";

const showEquipment = idArray => ({
  type: SHOW_EQUIPMENT,
  idArray
});

const addEquipment = (id, name, count) => ({
  type: ADD_EQUIPMENT,
  id,
  name,
  count
});

const editEquipment = (id, name, count) => ({
  type: EDIT_EQUIPMENT,
  id,
  name,
  count
});

const deleteEquipment = (id, name) => ({
  type: DELETE_EQUIPMENT,
  id,
  name
});

export { showEquipment, addEquipment, editEquipment, deleteEquipment };
