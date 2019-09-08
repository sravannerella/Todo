import { ofType } from "redux-observable"
import {flatMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

export const getEpic = (action$, url, GET_ACTION, GOT_ACTION, ERR_ACTION) => {
    return action$.pipe(
        ofType(GET_ACTION),
        flatMap((action) => {
            return ajax.post(url, action.body).pipe(
                map(data => ({type: GOT_ACTION, payload: data.response})),
                catchError(err => ({type: ERR_ACTION, payload: err.message}))
            )
        })
    )
}