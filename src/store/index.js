import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import toDoApp from "./reducer"
import rootSaga from "./sagas"

import { loadToDoList } from "./actions"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(toDoApp, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

store.dispatch(loadToDoList())

export default store
