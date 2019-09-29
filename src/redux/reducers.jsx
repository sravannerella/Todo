import { combineReducers } from "redux";
import { GetTodosReducer } from './API/GetTodos/GetTodosReducer';
import { SubTasksReducer } from './API/GetSubTasks/reducer';
import { ShowTaskReducer } from './Triggers/reducers';

export const reducers = combineReducers({
    GetTodosReducer,
    SubTasksReducer,
    ShowTaskReducer
});