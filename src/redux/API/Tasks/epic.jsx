import { postEpicMulti } from "../../../hoc"
import { ADD_TASK, ADDED_TASK, ERR_TASK } from "./constants"
import { GET_TODOS } from "../GetTodos/GetTodosConstants";

export const addTaskEpic = (action$) => {
    return postEpicMulti(action$, process.env.REACT_APP_API_HOST + '/todos', ADD_TASK, ADDED_TASK, ERR_TASK, GET_TODOS);
}