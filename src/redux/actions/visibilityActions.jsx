import { TOGGLE_MODAL, EDIT_MODAL, TOGGLE_BOARD } from '../constants/visibility';

export const toggleModal = (visible) => {
	return {type: TOGGLE_MODAL, open: visible};
};

export const editModal = (text, more, board, id) => {
	return {type: EDIT_MODAL, open: false, text, more, board, id};
}

export const toggleBoard = (open) => {
	console.log("OPEN:", { type: TOGGLE_BOARD, open });
	return { type: TOGGLE_BOARD, open }
}