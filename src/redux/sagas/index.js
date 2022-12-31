import { spawn} from 'redux-saga/effects';
import {watchChangeSearchSaga} from './ChangeSearchSaga'
import {watchSearchSkillsSaga} from './SearchSkillsSaga'

export default function* rootSaga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga);
}

