import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import jwt_decode from "jwt-decode";
import { authUser } from "./user/userAction";

const checkTokenExpirationMiddleware = store => next => action => {
  const {dispatch} = store;
  if (localStorage.getItem("token")) {
    const decoded = jwt_decode(localStorage.getItem("token"));
    if(decoded && decoded.exp && (decoded.exp < Date.now() / 1000) ) {
      localStorage.removeItem("token");
      dispatch(authUser({isAdmin: false}));
    }
  }
  next(action);
};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, checkTokenExpirationMiddleware), devTools)
);

export default store;
