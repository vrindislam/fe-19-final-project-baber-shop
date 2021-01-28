import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import myModalRegister from './registerModal/registerModalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";


const rootReducer = combineReducers({
  testProduct: testReducer,
  user: userReducer,
  myModalRegister: myModalRegister,
  preloader: preloaderReducer,
  cart: cartReducer
})

export default rootReducer
