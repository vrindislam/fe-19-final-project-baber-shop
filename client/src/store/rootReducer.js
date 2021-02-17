import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import modalHandler from './modal/modalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import filterReducer from "./filters/filterReducer";
import priceSliderReducer from "./priceSlider/priceSliderReducer";

const rootReducer = combineReducers({
  testProduct: testReducer,
  user: userReducer,
  modalHandler: modalHandler,
  preloader: preloaderReducer,
  cart: cartReducer,
  filterReducer: filterReducer,
  priceSliderReducer: priceSliderReducer
})

export default rootReducer
