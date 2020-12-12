import {
    GET_TASK_DATA,
    GET_TASK_DATA_SUCCESS,
    GET_TASK_DATA_FAILURE,
    ADD_TASK_DATA,
    ADD_TASK_DATA_SUCCESS,
    ADD_TASK_DATA_FAILURE
} from "./Types/types";


export const getTaskData = (payload) => ({
    type : GET_TASK_DATA,
    payload,
})

export const getTaskDataSuccess = (payload) => ({
    type : GET_TASK_DATA_SUCCESS,
    payload,
})

export const getTaskDataFailure = (payload) => ({
    type : GET_TASK_DATA_FAILURE,
    payload,
})

export const addTaskData = (payload) => ({
    type : ADD_TASK_DATA,
    payload,
})

export const addTaskDataSuccess = (payload) => ({
    type : ADD_TASK_DATA_SUCCESS,
    payload,
})

export const addTaskDataFailure = (payload) => ({
    type : ADD_TASK_DATA_FAILURE,
    payload,
})