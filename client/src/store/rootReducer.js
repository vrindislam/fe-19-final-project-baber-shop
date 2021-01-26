import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import myModalRegister from './registerModal/registerModalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";
import filterReducer from "./checkboxFilters/checkboxFiltersReducer";


const rootReducer = combineReducers({
  testProduct: testReducer,
  myModalRegister: myModalRegister,
  preloader: preloaderReducer,
  cart: cartReducer,
  filters: filterReducer
})

export default rootReducer
