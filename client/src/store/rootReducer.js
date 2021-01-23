import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import myModalRegister from './registerModal/registerModalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";


const rootReducer = combineReducers({
  testProduct: testReducer,
  myModalRegister: myModalRegister,
  preloader: preloaderReducer,
  cart: cartReducer,
})

export default rootReducer
