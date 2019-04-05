import { TOGGLE_BOARD } from "../constants/visibility";

const visibilityReducer = (state=[], action) => {
	switch(action.type){
		case 'TOGGLE_MODAL':
			return {
				...state,
				open: !action.open,
				text: '',
				more: '',
				board: '',
				isEdit: false
			}
		case 'EDIT_MODAL':
			return{
				...state,
				open: !action.open,
				id: action.id,
				text: action.text,
				more: action.more,
				board: action.board,
				isEdit: !action.isEdit
			}
		case TOGGLE_BOARD:
			return {
				...state,
				boardOpen: !action.open,
				name: ''
			}
		default:
			return state
	}
}

export default visibilityReducer;