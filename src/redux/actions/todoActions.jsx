import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/todo';

export const addTodo = (text, more, board) => {
	return{
		type: ADD_TODO,
		text, more, board
	}
}

export const toggleTodo = (id) => {
	return{
		type: TOGGLE_TODO,
		id
	}
}

export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		id
	}
}

export const updateTodo = (text, more, board, id) => {
	return {
		type: UPDATE_TODO,
		text, more, board, id
	}
}