import {createStore, applyMiddleware} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {reducers} from '../redux/reducers';
import {epics} from '../redux/epics';

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducers, applyMiddleware(epicMiddleware));
epicMiddleware.run(epics);

export default store;