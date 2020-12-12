import {
    GET_COLUMNS_DATA,
    GET_COLUMNS_DATA_SUCCESS,
    GET_COLUMNS_DATA_FAILURE,
    ADD_COLUMNS_DATA,
    ADD_COLUMNS_DATA_SUCCESS,
    ADD_COLUMNS_DATA_FAILURE
} from "./Types/types";


export const getColumnsData = (payload) => ({
    type : GET_COLUMNS_DATA,
    payload,
})

export const getColumnsDataSuccess = (payload) => ({
    type : GET_COLUMNS_DATA_SUCCESS,
    payload,
})

export const getColumnsDataFailure = (payload) => ({
    type : GET_COLUMNS_DATA_FAILURE,
    payload,
})

export const addColumnsData = (payload) => ({
    type : ADD_COLUMNS_DATA,
    payload,
})

export const addColumnsDataSuccess = (payload) => ({
    type : ADD_COLUMNS_DATA_SUCCESS,
    payload,
})

export const addColumnsDataFailure = (payload) => ({
    type : ADD_COLUMNS_DATA_FAILURE,
    payload,
})