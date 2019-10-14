import { combineReducers } from 'redux';
import { moviesReducer } from './reducers/movies';
import { StoreAll } from './types';

export default combineReducers<StoreAll>({
  moviesReducer,
});
