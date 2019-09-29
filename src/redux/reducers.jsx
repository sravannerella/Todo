import { combineReducers } from "redux";
import { GetTodosReducer } from './API/GetTodos/GetTodosReducer';
import { TasksReducer } from './API/Tasks/reducers';
import { SubTasksReducer } from './API/GetSubTasks/reducer';
import { ShowTaskReducer } from './Triggers/reducers';

export const reducers = combineReducers({
    GetTodosReducer,
    SubTasksReducer,
    TasksReducer,
    ShowTaskReducer
});