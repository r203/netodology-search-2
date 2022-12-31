import { put, debounce } from 'redux-saga/effects';
import { searchSkillsRequest, changeSearchField } from '../searchSlice';

const filterChangeSearchAction = ({ type, payload = '' }) => {
  return type === 'skills/changeSearchField' && payload.trim() !== ''
  // return changeSearchField && payload.trim() !== '' По хорошему тут вот так надо писать, но у меня не получилось. Пожалуйста напишите как сделать так что бы это условие сработало?
}

//worker
function* handleChangeSearchSaga(action) {
  yield put(searchSkillsRequest(action.payload));
}

//watcher
export function* watchChangeSearchSaga(arg) {
  console.log(arg);
  yield debounce(100,
    filterChangeSearchAction,
    handleChangeSearchSaga);
}