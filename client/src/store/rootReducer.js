import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import modalHandler from './modal/modalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import filterReducer from "./checkboxFilters/checkboxFiltersReducer";
import priceFilterReducer from "./priceFilter/priceFilterReducer";


const rootReducer = combineReducers({
  testProduct: testReducer,
  user: userReducer,
  modalHandler: modalHandler,
  preloader: preloaderReducer,
  cart: cartReducer,
  checkboxFilters: filterReducer,
  priceFilter: priceFilterReducer
})

export default rootReducer
