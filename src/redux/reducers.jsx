import { combineReducers } from "redux";
import { GetTodosReducer } from './API/GetTodos/GetTodosReducer';
import { ShowTaskReducer } from './Triggers/reducers';

export const reducers = combineReducers({
    GetTodosReducer,
    ShowTaskReducer
});