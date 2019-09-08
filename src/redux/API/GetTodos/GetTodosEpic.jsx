import {GET_TODOS, GOT_TODOS, ERR_TODOS} from './GetTodosConstants';
import {getEpic} from '../../../hoc';

export const GetTodosEpic = (action$) => {
    return getEpic(action$, 'https://jsonplaceholder.typicode.com/todos', GET_TODOS, GOT_TODOS, ERR_TODOS);
};