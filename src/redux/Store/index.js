import {createStore, applyMiddleware} from 'redux'

import createSagaMiddleware from "redux-saga"

import reducers from "../Reducers";
import rootSaga from "../Sagas";

const sagaMiddleWare = createSagaMiddleware();

const middlewarees = [sagaMiddleWare];

export default function store(initialState){
    const Store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middlewarees)
    )

    sagaMiddleWare.run(rootSaga)

    return Store;
}