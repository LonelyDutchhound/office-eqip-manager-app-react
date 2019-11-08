import { all } from "redux-saga/effects";
import getEquipmentSaga from "./getEquipmentSaga";
import getStructureSaga from "./getStructureSaga";

export default function* rootSaga() {
  yield all([getStructureSaga(), getEquipmentSaga()]);
}
