import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import myModalRegister from './registerModalReducer'

const rootReducer = combineReducers({
  testProduct: testReducer,
  myModalRegister: myModalRegister
})

export default rootReducer
