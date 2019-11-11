import { put, call, select } from "redux-saga/effects";
import * as getInfo from "../store/actions/getInfoActions";
import addEquipScorocode from "../utils/APIUtils/addEquipScorocode";
import getInfoScorocode from "../utils/APIUtils/getInfoScorocode";
import { EQUIPMENT } from "./constants";

const { setEquipment } = getInfo;

export default function* addEquipmentSaga() {
  const itemData = yield select(state => state.postItemData);
  const roomData = yield select(state => state.isRoom);
  const addItemData = {
    id: roomData,
    name: itemData.name,
    quantity: itemData.quantity
  };
  yield call(addEquipScorocode, addItemData);
  const equipment = yield call(getInfoScorocode, EQUIPMENT);
  yield put(setEquipment(equipment));
}
