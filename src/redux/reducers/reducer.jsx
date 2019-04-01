import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityReducer from './visibilityReducer';

const reducer = combineReducers({
	todoReducer,
	visibilityReducer
});

export default reducer;