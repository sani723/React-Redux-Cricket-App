import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {players} from './playerReducer';
import {teams} from './teamReducer';


const appReducer = combineReducers({
  players,
  teams
});

export default (initialState={}) => applyMiddleware(thunk, logger)(createStore)(appReducer, initialState);
