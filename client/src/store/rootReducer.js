import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import preloaderReducer from './preloader/preloaderReducer'

const rootReducer = combineReducers({
  testProduct: testReducer,
  preloader: preloaderReducer,
})

export default rootReducer
