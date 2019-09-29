import { GET_SUBTASKS, GOT_SUBTASKS, ERR_SUBTASKS } from './constants';
import { ofType } from "redux-observable"
import {flatMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

export const GetSubTaskEpic = (action$) => {
    return action$.pipe(
        ofType(GET_SUBTASKS),
        flatMap( (action) => {
            return ajax.get(process.env.REACT_APP_API_HOST + '/subtasks/?todoId=' + action.id).pipe(
                map(data => ({type: GOT_SUBTASKS, payload: data.response})),
                catchError(err => ({type: ERR_SUBTASKS, payload: err.message}))
            )
        })
    )
}