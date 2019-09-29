import { GET_SUBTASKS, GOT_SUBTASKS, ERR_SUBTASKS } from "./constants";

export const SubTasksReducer = (state={}, action) => {
    switch(action.type){
        case GET_SUBTASKS:
            return {
                ...state,
                isLoading: true,
                payload: null,
                error: false
            }
        case GOT_SUBTASKS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
                error: false
            }
        case ERR_SUBTASKS:
            return {
                ...state,
                isLoading: false,
                payload: action.payload,
                error: true
            }
        default:
            return state;
    }
}