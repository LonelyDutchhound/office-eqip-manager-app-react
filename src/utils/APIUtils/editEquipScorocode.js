import Scorocode from "scorocode";

const editEquipScorocode = async ({ id, name, quantity }) => {
  const record = new Scorocode.Object("equipment");
  const count = parseInt(quantity, 10);
  record
    .set("_id", id)
    .set("name", name)
    .set("count", count);
  const saveChanges = await record.save();
  return saveChanges;
};

export default editEquipScorocode;
