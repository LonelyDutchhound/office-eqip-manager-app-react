import { put, call, select } from "redux-saga/effects";
import * as getInfo from "../store/actions/getInfoActions";
import deleteEquipScorocode from "../utils/APIUtils/deleteEquipScorocode";
import getInfoScorocode from "../utils/APIUtils/getInfoScorocode";
import { EQUIPMENT } from "./constants";

const { setEquipment } = getInfo;

export default function* deleteEquipmentSaga() {
  const itemData = yield select(state => state.postItemData);

  yield call(deleteEquipScorocode, itemData);

  const equipment = yield call(getInfoScorocode, EQUIPMENT);
  yield put(setEquipment(equipment));
}
