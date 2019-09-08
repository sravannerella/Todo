import { GET_TODOS, GOT_TODOS, ERR_TODOS } from "./GetTodosConstants";

export const GetTodosReducer = (state={}, action) => {
    switch(action.type){
        case GET_TODOS:
            return {
                ...state,
                payload: null,
                error: false,
                loading: true
            }
        case GOT_TODOS:
            return {
                ...state,
                payload: action.payload,
                error: false,
                loading: false
            }
        case ERR_TODOS:
            return {
                ...state,
                payload: action.payload,
                error: true,
                loading: false
            }
        default:
            return state;
    }
}