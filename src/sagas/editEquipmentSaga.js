import { put, call, select } from "redux-saga/effects";
import * as getInfo from "../store/actions/getInfoActions";
import editEquipScorocode from "../utils/APIUtils/editEquipScorocode";
import getInfoScorocode from "../utils/APIUtils/getInfoScorocode";
import { EQUIPMENT } from "./constants";

const { setEquipment } = getInfo;

export default function* editEquipmentSaga() {
  const editItemData = yield select(state => state.postItemData);

  yield call(editEquipScorocode, editItemData);

  const equipment = yield call(getInfoScorocode, EQUIPMENT);
  yield put(setEquipment(equipment));
}
