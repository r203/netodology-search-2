// import { applyMiddleware, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import searchReducer from './searchSlice'
import rootSaga from "./sagas/index.js";



const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    skills: searchReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
// export default store;

