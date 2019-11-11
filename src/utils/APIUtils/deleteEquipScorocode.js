import Scorocode from "scorocode";

const deleteEquipScorocode = async ({ id }) => {
  const archive = new Scorocode.Object("equipment");
  const item = await archive.getById(id);
  await archive.remove(item);
};

export default deleteEquipScorocode;
