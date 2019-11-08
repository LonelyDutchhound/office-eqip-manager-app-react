import Scorocode from "scorocode";

export default async infoField => {
  try {
    const archive = new Scorocode.Query(infoField);
    const isFound = await archive.find();
    return isFound.result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
