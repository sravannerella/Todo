import { combineEpics } from "redux-observable";
import { GetTodosEpic } from './API/GetTodos/GetTodosEpic';
import { GetSubTaskEpic } from './API/GetSubTasks/epic';

export const epics = combineEpics(
    GetTodosEpic,
    GetSubTaskEpic
);