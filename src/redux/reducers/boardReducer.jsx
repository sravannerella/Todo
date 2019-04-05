import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD } from "../constants/board";

let nextID = 0;
const boardReducer = (state=[], action) => {
	console.log("STATE: ", state);
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
		default:
			return state;
	}
}

export default boardReducer;