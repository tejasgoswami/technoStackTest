import { all, takeEvery, put } from "redux-saga/effects";
import { GET_COLUMNS_DATA, ADD_COLUMNS_DATA } from "../Actions/Types/types";
import axios from 'axios';

import {
    getColumnsDataFailure,
    getColumnsDataSuccess,
    addColumnsDataFailure,
    addColumnsDataSuccess
} from "../Actions/index";

function* getColumnsDataRequests(action){
    try{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*"
            },
            proxy: {
                host: '192.168.43.3',
                port: 3000
              }
          }

        let res = axios.get('http://demo.ciaoworks.com/practical/kanban/?getData=columns'
        ,config)
        .then(res => {
            console.log('res',res)
        })
        .catch(err => {
            console.log('err',err)
        })
        if (res){
            yield put(getColumnsDataSuccess())
        } else {
            yield put(getColumnsDataFailure())
        }
    } catch(error){
        yield put(getColumnsDataFailure(error))
    }
}

function* addColumnDataRequests(action){
    
    try{
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }

        let res = axios.post(`http://demo.ciaoworks.com/practical/kanban/?postData=column&data=${action.data}`
        ,config)
        .then(res => {
            console.log('res',res)
            // yield put(addColumnsDataSuccess())
        })
        .catch(err => {
            // yield put(addColumnsDataFailure(err))
        })
    } catch(error){
        yield put(addColumnsDataFailure(error))
    }
}

function* getColumnsData(){
    yield takeEvery(GET_COLUMNS_DATA,getColumnsDataRequests)
}

function* addColumnsData(){
    yield takeEvery(ADD_COLUMNS_DATA,addColumnDataRequests)
}

export default function* rootSaga(){
    yield all([
        getColumnsData(),
        addColumnsData()
    ])
}