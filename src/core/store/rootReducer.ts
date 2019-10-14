import { combineReducers } from 'redux';
import { moviesReducer } from './reducers/movies';
import { StoreAll } from './store';

export default combineReducers<StoreAll>({
  moviesReducer,
});
