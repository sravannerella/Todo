import { getEpic } from "../../../hoc";
import { GET_SUBTASKS, GOT_SUBTASKS, ERR_SUBTASKS } from './constants';

export const GetSubTaskEpic = (action$) => {
    return getEpic(action$, process.env.REACT_APP_API_HOST + '/subtasks', GET_SUBTASKS, GOT_SUBTASKS, ERR_SUBTASKS);
};