import { SET_EQUIPMENT, SET_STRUCTURE } from "../constants/index";

const setReducer = (state = { structure: [], equipment: [] }, action) => {
  switch (action.type) {
    case SET_STRUCTURE:
      return { ...state, structure: action.structure };
    case SET_EQUIPMENT:
      return { ...state, equipment: action.equipment };
    default:
      return state;
  }
};

export default setReducer;
