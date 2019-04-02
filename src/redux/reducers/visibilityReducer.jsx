const visibilityReducer = (state=[], action) => {
	switch(action.type){
		case 'TOGGLE_MODAL':
			return {
				...state,
				open: !action.open
			}
		default:
			return state
	}
}

export default visibilityReducer;