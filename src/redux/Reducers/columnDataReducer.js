import {
    GET_COLUMNS_DATA,
    GET_COLUMNS_DATA_SUCCESS,
    GET_COLUMNS_DATA_FAILURE,
    ADD_COLUMNS_DATA,
    ADD_COLUMNS_DATA_SUCCESS,
    ADD_COLUMNS_DATA_FAILURE
} from "../Actions/Types/types";

const INIT_STATE = {
    getDataLoader : false,
    addDataLoader : false,
    getColumnData : [],
    addColumnData : null
}

export default (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_COLUMNS_DATA : 
            return {...state, getDataLoader : true}
        case GET_COLUMNS_DATA_SUCCESS : 
            return {...state,getDataLoader : false, getColumnData : action.payload}
        case GET_COLUMNS_DATA_FAILURE : 
            return {...state,getDataLoader : false, getColumnData : null}
        case ADD_COLUMNS_DATA : 
            return {...state, addDataLoader : true}
        case ADD_COLUMNS_DATA_SUCCESS : 
            return {...state,addDataLoader : false, addColumnData : action.payload}
        case ADD_COLUMNS_DATA_FAILURE : 
            return {...state,addDataLoader : false, addColumnData : null}
        default : 
            return state;
    }
}