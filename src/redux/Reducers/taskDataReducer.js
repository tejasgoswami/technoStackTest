import {
    GET_TASK_DATA,
    GET_TASK_DATA_SUCCESS,
    GET_TASK_DATA_FAILURE,
    ADD_TASK_DATA,
    ADD_TASK_DATA_SUCCESS,
    ADD_TASK_DATA_FAILURE
} from "../Actions/Types/types";

const INIT_STATE = {
    getTaskLoader : false,
    addTaskLoader : false,
    getTaskData : [],
    addTaskData : null
}

export default (state = INIT_STATE,action) => {
    switch(action.type){
        case GET_TASK_DATA : 
            return {...state, getTaskLoader : true}
        case GET_TASK_DATA_SUCCESS : 
            return {...state,getTaskLoader : false, getTaskData : action.payload}
        case GET_TASK_DATA_FAILURE : 
            return {...state,getTaskLoader : false, getTaskData : null}
        case ADD_TASK_DATA : 
            return {...state, addTaskLoader : true}
        case ADD_TASK_DATA_SUCCESS : 
            return {...state,addTaskLoader : false, addTaskData : action.payload}
        case ADD_TASK_DATA_FAILURE : 
            return {...state,addTaskLoader : false, addTaskData : null}
        default : 
            return state;
    }
}