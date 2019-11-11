import { all } from "redux-saga/effects";
import getEquipmentSaga from "./getEquipmentSaga";
import getStructureSaga from "./getStructureSaga";
// eslint-disable-next-line import/named
import { watchEditSaga, watchDeleteSaga, watchAddSaga } from "./watchSagas";

export default function* rootSaga() {
  yield all([
    getStructureSaga(),
    getEquipmentSaga(),
    watchEditSaga(),
    watchDeleteSaga(),
    watchAddSaga()
  ]);
}
