import { ADD_TASK, ADDED_TASK, ERR_TASK } from "./constants";

const initState = {
    loading: false,
    error: false,
    payload: null
}

export const TasksReducer = (state=initState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                loading: true,
                payload: null,
                error: false
            }
        case ADDED_TASK:
            return {
                ...state,
                loading: false,
                payload: action.payload,
                error: false
            }
        case ERR_TASK:
            return {
                ...state,
                loading: false,
                payload: action.payload,
                error: true
            }
        default:
            return state;
    }
}