import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import myModalRegister from './registerModalReducer'
import preloaderReducer from './preloader/preloaderReducer'
const rootReducer = combineReducers({
  testProduct: testReducer,
  myModalRegister: myModalRegister,
  preloader: preloaderReducer,
})

export default rootReducer
