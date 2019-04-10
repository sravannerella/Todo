import { GET_SUBTASK ,ADD_SUBTASK, TOGGLE_SUBTASK, UPDATE_SUBTASK, DELETE_SUBTASK } from "../constants/subTask";

export const addSubTask = (text, board, todoId) => {
	return{
		type: ADD_SUBTASK,
		text, board, todoId
	}
}

export const getSubTask = (todoId, board) => {
	return{
		type: GET_SUBTASK,
		todoId, board
	}
}

export const toggleSubTask = (id, board, todoId) => {
	return{
		type: TOGGLE_SUBTASK,
		id, board, todoId
	}
}

export const deleteSubTask = (id, board, todoId) => {
	return {
		type: DELETE_SUBTASK,
		id, board, todoId
	}
}

export const updateSubTask = (id, text, board, todoId) => {
	return {
		type: UPDATE_SUBTASK,
		text, id, board, todoId
	}
}