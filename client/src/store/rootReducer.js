import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import myModalRegister from './registerModal/registerModalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";
import filterReducer from "./checkboxFilters/checkboxFiltersReducer";
import priceFilterReducer from "./priceFilter/priceFilterReducer";


const rootReducer = combineReducers({
  testProduct: testReducer,
  myModalRegister: myModalRegister,
  preloader: preloaderReducer,
  cart: cartReducer,
  checkboxFilters: filterReducer,
  priceFilter: priceFilterReducer
})

export default rootReducer
