import { ofType } from "redux-observable"
import {flatMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

export const postEpic = (action$, url, GET_ACTION, GOT_ACTION, ERR_ACTION) => {
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

export const postEpicMulti = (action$, url, GET_ACTION, GOT_ACTION, ERR_ACTION, NEW_GET_ACTION) => {
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