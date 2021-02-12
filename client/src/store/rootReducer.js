import { combineReducers } from 'redux'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import testReducer from './test_store/testReducer'
import modalHandler from './modal/modalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

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
  cart: cartReducer
})

export default persistReducer(persistConfig,rootReducer)
