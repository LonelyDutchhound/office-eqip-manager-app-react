import {
  ADD_EQUIPMENT,
  DELETE_EQUIPMENT,
  EDIT_EQUIPMENT,
  SET_EQUIPMENT,
  SET_IS_ADDING,
  SET_IS_ROOM,
  SET_STRUCTURE,
  SHOW_EQUIPMENT
} from "../constants/index";

const setReducer = (
  state = {
    structure: [],
    equipment: {},
    showEquipArray: [],
    postItemData: {},
    isRoom: false,
    isAddingOn: false
  },
  action
) => {
  switch (action.type) {
    case SET_STRUCTURE:
      return { ...state, structure: action.structure };
    case SET_EQUIPMENT:
      return { ...state, equipment: action.equipment };
    case SHOW_EQUIPMENT:
      return { ...state, showEquipArray: action.idArray };
    case EDIT_EQUIPMENT:
    case DELETE_EQUIPMENT:
    case ADD_EQUIPMENT:
      return { ...state, postItemData: action.data };
    case SET_IS_ROOM:
      return { ...state, isRoom: action.isRoom };
    case SET_IS_ADDING:
      return { ...state, isAddingOn: action.isAdding };
    default:
      return state;
  }
};

export default setReducer;
