import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD, TOGGLE_BOARD } from "../constants/board";

let nextID = 0;
const boardReducer = (state=[], action) => {
	switch(action.type){
		case CREATE_BOARD:
			return [
				...state,
				{
					id: nextID++,
					name: action.name
				}
			]
		case RENAME_BOARD:
			return state.map((board) => {
				return board.id === action.id ? ({ ...board, name: action.name, isEdit: true }) : { ...board, isEdit: true }
			})
		case DELETE_BOARD:
			state.forEach((board, i) => {
				if (board.id === action.id) {
					state.splice(i, 1)
				}
			});
			return state;
		case TOGGLE_BOARD:
			return {
				...state,
				boardOpen: !action.boardOpen
			}
		default:
			return state;
	}
}

export default boardReducer;