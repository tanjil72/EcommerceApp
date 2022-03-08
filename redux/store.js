import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ProductReducer from './ProductReducer';
const rootReducer = combineReducers({
  ProductReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));