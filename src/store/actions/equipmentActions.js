import {
  SHOW_EQUIPMENT,
  ADD_EQUIPMENT,
  EDIT_EQUIPMENT,
  DELETE_EQUIPMENT,
  SET_IS_ROOM,
  SET_IS_ADDING
} from "../constants";

const showEquipment = idArray => ({
  type: SHOW_EQUIPMENT,
  idArray
});

const addEquipment = (name, quantity) => ({
  type: ADD_EQUIPMENT,
  data: {
    name,
    quantity
  }
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

const setRoom = isRoom => ({
  type: SET_IS_ROOM,
  isRoom
});

const isAddingOn = isAdding => ({
  type: SET_IS_ADDING,
  isAdding
});

export {
  showEquipment,
  addEquipment,
  editEquipment,
  deleteEquipment,
  setRoom,
  isAddingOn
};
