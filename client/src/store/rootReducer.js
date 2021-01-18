import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'

const rootReducer = combineReducers({
  testProduct: testReducer,
})

export default rootReducer
