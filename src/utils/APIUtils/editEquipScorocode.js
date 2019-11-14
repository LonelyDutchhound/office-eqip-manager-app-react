import Scorocode from "scorocode";

const editEquipScorocode = async ({ id, name, quantity }) => {
  try {
    const record = new Scorocode.Object("equipment");
    const count = parseInt(quantity, 10);
    record
      .set("_id", id)
      .set("name", name)
      .set("count", count);
    await record.save();
  } catch (error) {
    console.log(error); // temporary solution, error handlers are needed
  }
};

export default editEquipScorocode;
