import Scorocode from "scorocode";

const addEquipScorocode = async ({ id, name, quantity }) => {
  try {
    const record = new Scorocode.Object("equipment");
    const count = parseInt(quantity, 10);
    console.log(id, name, count);
    record
      .set("name", name)
      .set("room", id)
      .set("count", count);
    await record.save();
  } catch (error) {
    console.log(error);
  }
};

export default addEquipScorocode;
