import { ADD_SUBTASK, UPDATE_SUBTASK, TOGGLE_SUBTASK, GET_SUBTASK } from "../constants/subTask";

let nextID = 0;
const subTaskReducer = (state=[], action) => {

	switch(action.type){
		case GET_SUBTASK:
			return state;
		case ADD_SUBTASK:
			if (action.text.trim() === ""){
				return state;
			}
			return [
				...state,
				{
					id: nextID++,
					text: action.text,
					board: action.board,
					todoId: action.todoId,
					completed: false
				}
			]
		case UPDATE_SUBTASK:
			return state.map((todo) => {
				return (todo.id === action.id && todo.todoId === action.todoId && todo.board === action.board) ? ({...todo, text: action.text, isEdit: true}) : {...todo, isEdit: true};
			});
		case TOGGLE_SUBTASK:
			return state.map((todo) => {
				return (todo.id === action.id && todo.todoId === action.todoId && todo.board === action.board) ? ({...todo, completed: !todo.completed}) : todo;
			})
		default:
			return state;
	}
}

export default subTaskReducer;