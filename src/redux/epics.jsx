import { combineEpics } from "redux-observable";
import { GetTodosEpic } from './API/GetTodos/GetTodosEpic';
import { addTaskEpic } from './API/Tasks/epic';
import { GetSubTaskEpic } from './API/GetSubTasks/epic';

export const epics = combineEpics(
    GetTodosEpic,
    addTaskEpic,
    GetSubTaskEpic
);