import { SET_EQUIPMENT, SET_STRUCTURE } from "../constants";

const setStructure = structure => ({
  type: SET_STRUCTURE,
  structure
});

const setEquipment = equipment => ({
  type: SET_EQUIPMENT,
  equipment
});

export { setStructure, setEquipment };
