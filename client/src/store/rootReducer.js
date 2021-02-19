import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import modalHandler from './modal/modalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import filterReducer from "./filters/filterReducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig ={
  key:'root',
  storage,
  whitelist: ['user','cart']
}

const rootReducer = combineReducers({
  testProduct: testReducer,
  user: userReducer,
  modalHandler: modalHandler,
  preloader: preloaderReducer,
  cart: cartReducer,
  filterReducer: filterReducer,
})

export default persistReducer(persistConfig,rootReducer)
