export const idArrayCreator = unit => {
  const idArray = [];
  idArray.push(unit.id);
  if (unit.rooms) {
    unit.rooms.forEach(room =>
      idArrayCreator(room).forEach(elem => idArray.push(elem))
    );
  }
  return idArray;
};
