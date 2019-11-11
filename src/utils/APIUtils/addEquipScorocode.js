import Scorocode from "scorocode";

const addEquipScorocode = async ({ id, name, quantity }) => {
  const record = new Scorocode.Object("equipment");
  const count = parseInt(quantity, 10);
  record
    .set("name", name)
    .set("room", id)
    .set("count", count);
  await record.save();
};

export default addEquipScorocode;
