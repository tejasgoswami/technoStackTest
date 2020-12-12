import { combineReducers } from "redux";

import columnReducer from "./columnDataReducer";
import taskReducer from "./taskDataReducer";

const appReducer = combineReducers({
    columnReducer,
    taskReducer
});

const reducers = (state,action) => {
    return appReducer(state,action)
}

export default reducers;