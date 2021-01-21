import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";


const rootReducer = combineReducers({
  testProduct: testReducer,
  preloader: preloaderReducer,
  cart: cartReducer,
})

export default rootReducer
