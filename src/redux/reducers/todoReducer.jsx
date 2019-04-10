import {ADD_TODO, UPDATE_TODO, TOGGLE_TODO} from '../constants/todo';

let nextID = 0;
const todoReducer = (state=[], action) => {
	switch(action.type){
		case ADD_TODO:
			if(action.text.trim() === ""){
				return state;
			}
			return [
				...state,
				{
					id: nextID++,
					text: action.text,
					more: action.more,
					board: action.board === "" ? "My Tasks" : action.board,
					completed: false
				}
			]
		case UPDATE_TODO:
			return state.map((todo) => {
				return (todo.id === action.id) ? ({...todo, text: action.text, more: action.more, board: action.board, isEdit: true }) :  {...todo, isEdit: true};
			});
		case TOGGLE_TODO:
			return state.map((todo) => {
				return (todo.id === action.id) ? ({...todo, completed: !todo.completed}) : todo;
			});
		default:
			return state;
	}
}

export default todoReducer;