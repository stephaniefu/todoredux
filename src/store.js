import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk'

const middleware = [thunk];

const store = createStore(rootReducers, {}, applyMiddleware(...middleware))

export default store;
