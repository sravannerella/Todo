import { ADD_SUBTASK, UPDATE_SUBTASK, TOGGLE_SUBTASK, GET_SUBTASK, DELETE_SUBTASK } from "../constants/subTask";

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
				return (todo.id === action.id) ? ({...todo, text: action.text, isEdit: true}) : {...todo, isEdit: true};
			});
		case TOGGLE_SUBTASK:
			return state.map((todo) => {
				return (todo.id === action.id) ? ({...todo, completed: !todo.completed}) : todo;
			});
		case DELETE_SUBTASK:
			let pos = state.findIndex((task) => task.id === action.id);
			state.splice(pos, 1);
			return [...state];
		default:
			return state;
	}
}

export default subTaskReducer;