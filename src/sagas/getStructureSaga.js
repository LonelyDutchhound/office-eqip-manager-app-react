import { put, call } from "redux-saga/effects";
import * as getInfo from "../store/actions/getInfoActions";
import getInfoScorocode from "../utils/APIUtils/getInfoScorocode";
import { BUILDINGS } from "./constants";

const { setStructure } = getInfo;
export default function* getStructureSaga() {
  const structure = yield call(getInfoScorocode, BUILDINGS);
  yield put(setStructure(structure));
}
