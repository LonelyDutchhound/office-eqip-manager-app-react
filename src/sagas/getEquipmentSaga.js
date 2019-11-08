import { put, call } from "redux-saga/effects";
import * as getInfo from "../store/actions/getInfoActions";
import getInfoScorocode from "../utils/getnfoScorocode";
import { EQUIPMENT } from "./constants";

const { setEquipment } = getInfo;
export default function* getEquipmentSaga() {
  const equipment = yield call(getInfoScorocode, EQUIPMENT);
  yield put(setEquipment(equipment));
}
