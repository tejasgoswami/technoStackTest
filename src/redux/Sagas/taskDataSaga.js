import { all, takeEvery, put } from "redux-saga/effects";
import { GET_TASK_DATA, ADD_TASK_DATA } from "../Actions/Types/types";
import axios from 'axios';

import {
    getTaskDataFailure,
    getTaskDataSuccess,
    addTaskDataFailure,
    addTaskDataSuccess
} from "../Actions/index";

function* getTaskDataRequests(action){
    try{
        let res = {}
        if (res){
            yield put(getTaskDataSuccess())
        } else {
            yield put(getTaskDataFailure())
        }
    } catch(error){
        yield put(getTaskDataFailure(error))
    }
}

function* addTaskDataRequests(action){
    try{
        let res = {}
        if (res){
            yield put(addTaskDataSuccess())
        } else {
            yield put(addTaskDataFailure())
        }
    } catch(error){
        yield put(addTaskDataFailure(error))
    }
}

function* getTaskData(){
    yield takeEvery(GET_TASK_DATA,getTaskDataRequests)
}

function* addTaskData(){
    yield takeEvery(ADD_TASK_DATA,addTaskDataRequests)
}

export default function* rootSaga(){
    yield all([
        getTaskData(),
        addTaskData()
    ])
}