import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import modalHandler from './modal/modalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import cartProducts from "./cartItem/cartItemReducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartProducts']
}

const rootReducer = combineReducers({
  testProduct: testReducer,
  user: userReducer,
  modalHandler: modalHandler,
  preloader: preloaderReducer,
  cart: cartReducer,
  cartProducts: cartProducts
})

export default persistReducer(persistConfig, rootReducer);
