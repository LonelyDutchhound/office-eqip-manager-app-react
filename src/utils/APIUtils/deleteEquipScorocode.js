import Scorocode from "scorocode";

const deleteEquipScorocode = async ({ id }) => {
  try {
    const archive = new Scorocode.Object("equipment");
    const item = await archive.getById(id);
    await archive.remove(item);
  } catch (error) {
    console.log(error);
  }
};

export default deleteEquipScorocode;
