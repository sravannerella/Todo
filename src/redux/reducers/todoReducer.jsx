let nextID = 0;
const todoReducer = (state=[], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				{
					id: nextID++,
					text: action.text,
					more: action.more,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map((todo) => {
				return (todo.id === action.id) ? ({...todo, completed: !todo.completed}) : todo;
			});
		default:
			return state;
	}
}

export default todoReducer;