import Scorocode from "scorocode";
import { BUILDINGS, EQUIPMENT } from "../../sagas/constants";

const equipMap = equipArray => {
  return equipArray.reduce((accum, next) => {
    const { _id, name, room, count } = next;
    // eslint-disable-next-line no-param-reassign
    accum[next.room] = accum[next.room]
      ? [
          ...accum[next.room],
          {
            id: _id,
            name,
            room,
            count
          }
        ]
      : [
          {
            id: _id,
            name,
            room,
            count
          }
        ];
    return accum;
  }, {});
};

const structureMap = structureArray => {
  return structureArray.map(building => {
    const mapedBuilding = {
      // eslint-disable-next-line no-underscore-dangle
      id: building._id,
      name: building.name
    };
    if (building.rooms)
      mapedBuilding.rooms = building.rooms.map(room => {
        const mapedRoom = {
          id: room.id,
          name: room.name
        };
        if (room.children)
          mapedRoom.rooms = room.children.map(child => ({
            id: child.id,
            name: child.name
          }));
        return mapedRoom;
      });
    return mapedBuilding;
  });
};

export default async infoField => {
  try {
    const archive = new Scorocode.Query(infoField);
    const isFound = await archive.find();
    switch (infoField) {
      case EQUIPMENT:
        return equipMap(isFound.result);
      case BUILDINGS:
        return structureMap(isFound.result);
      default:
        return [];
    }
  } catch (error) {
    console.log(error); // Temporary solution - errorlog & errorboundaries are needed
    return error;
  }
};
