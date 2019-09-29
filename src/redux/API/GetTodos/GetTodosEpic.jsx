import {GET_TODOS, GOT_TODOS, ERR_TODOS} from './GetTodosConstants';
import {getEpic} from '../../../hoc';

export const GetTodosEpic = (action$) => {
    return getEpic(action$, process.env.REACT_APP_API_HOST + '/todos', GET_TODOS, GOT_TODOS, ERR_TODOS);
};