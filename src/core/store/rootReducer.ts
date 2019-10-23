import { combineReducers } from 'redux';
import { moviesReducer } from './movies/reducer';
import { StoreAll } from './store';

export default combineReducers<StoreAll>({
  moviesReducer,
});
