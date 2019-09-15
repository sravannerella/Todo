import { SHOW_TASK, CLOSE_TASK } from "./showTaskConstants";

const initState = {
    open: false,
    task: {}
}

export const showTaskReducer = (state = initState, action) => {
    switch(action.type){
        case SHOW_TASK:
            return {
                ...state,
                open: true,
                task: action.task
            }
        case CLOSE_TASK:
            return {
                ...state,
                ...initState
            }
        default:
            return state;
    }
}