import Scorocode from "scorocode";

const deleteEquipScorocode = async ({ id }) => {
  const archive = new Scorocode.Object("equipment");
  const item = await archive.getById(id);
  const saveChanges = await archive.remove(item);
  return saveChanges;
};

export default deleteEquipScorocode;
