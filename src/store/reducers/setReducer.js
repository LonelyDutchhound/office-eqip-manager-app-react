import {
  SET_EQUIPMENT,
  SET_STRUCTURE,
  SHOW_EQUIPMENT
} from "../constants/index";

const setReducer = (state = {structure: [], equipment: {}, showEquipArray: []}, action) => {
  switch (action.type) {
    case SET_STRUCTURE:
      return { ...state, structure: action.structure };
    case SET_EQUIPMENT:
      return { ...state, equipment: action.equipment };
    case SHOW_EQUIPMENT:
      return { ...state, showEquipArray: action.idArray };
    default:
      return state;
  }
};

export default setReducer;
