import { combineReducers } from 'redux';
import rootReducers from './rootReducers';

export default combineReducers({
  todos: rootReducers
});