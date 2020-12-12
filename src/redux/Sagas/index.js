import {all} from 'redux-saga/effects'

import ColumnsSaga from "./columnDataSaga";
import taskSaga from "./taskDataSaga";

export default function* rootSaga(){
    yield all([
        ColumnsSaga(),
        taskSaga()
    ])
}