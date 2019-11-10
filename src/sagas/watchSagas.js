import { takeEvery } from "redux-saga/effects";
import editEquipmentSaga from "./editEquipmentSaga";
import deleteEquipmentSaga from "./deleteEquipmentSaga";
import { DELETE_EQUIPMENT, EDIT_EQUIPMENT } from "../store/constants";

export function* watchEditSaga() {
  yield takeEvery(EDIT_EQUIPMENT, editEquipmentSaga);
}

export function* watchDeleteSaga() {
  yield takeEvery(DELETE_EQUIPMENT, deleteEquipmentSaga);
}
