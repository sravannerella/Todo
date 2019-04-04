import {CREATE_BOARD, DELETE_BOARD, RENAME_BOARD, TOGGLE_BOARD} from '../constants/board';

export const createBoard = (name) => {
	return {
		type: CREATE_BOARD,
		name
	}
}

export const deleteBoard = (id) => {
	return {
		type: DELETE_BOARD,
		id
	}
}

export const renameBoard = (id, name) => {
	return {
		type: RENAME_BOARD,
		id,
		name
	}
}

export const toggleBoard = (open) => {
	return {
		type: TOGGLE_BOARD,
		open
	}
}