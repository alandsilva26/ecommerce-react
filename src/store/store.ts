import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
