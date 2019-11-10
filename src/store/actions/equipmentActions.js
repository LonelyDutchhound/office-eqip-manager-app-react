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

const editEquipment = (id, name, quantity, room) => ({
  type: EDIT_EQUIPMENT,
  data: {
    id,
    name,
    quantity,
    room
  }
});

const deleteEquipment = id => ({
  type: DELETE_EQUIPMENT,
  data: { id }
});

export { showEquipment, addEquipment, editEquipment, deleteEquipment };
