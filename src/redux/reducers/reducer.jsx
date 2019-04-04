import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityReducer from './visibilityReducer';
import boardReducer from './boardReducer';

const reducer = combineReducers({
	todoReducer,
	visibilityReducer,
	boardReducer
});

export default reducer;