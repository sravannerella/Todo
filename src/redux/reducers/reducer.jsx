import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityReducer from './visibilityReducer';
import boardReducer from './boardReducer';
import subTaskReducer from './subtaskReducer';

const reducer = combineReducers({
	todoReducer,
	visibilityReducer,
	boardReducer,
	subTaskReducer
});

export default reducer;