import { put, takeLatest, retry } from 'redux-saga/effects';
import { searchSkillsRequest, searchSkillsSuccess } from '../searchSlice';
import { searchSkills } from '../../API/api'

//worker
function* handleSearchSkillsSaga(action) {
  const data = yield retry(3, 3000, searchSkills, action.payload);
  yield put(searchSkillsSuccess(data));
}

//watcher
export function* watchSearchSkillsSaga() {
    yield takeLatest(searchSkillsRequest, handleSearchSkillsSaga);
}