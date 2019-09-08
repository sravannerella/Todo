import { combineEpics } from "redux-observable";
import { GetTodosEpic } from './API/GetTodos/GetTodosEpic';

export const epics = combineEpics(
    GetTodosEpic
);