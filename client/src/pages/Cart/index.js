import React from "react";
import "./styles.less";
import ProductsContainer from "../../components/CartProductsContainer";
// import CartTotal from "../../components/CartTotal";
import RegistrationModal from "../../components/Modal/RegisterModal"

import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/modal/modalAction";

import {TotalAmount} from "../../components/CartTotalQuaintity"
const Cart = (props) => {
  const dispatch = useDispatch();
  const productsLength = useSelector(state => state.cartProducts.products.length);
  const showModalR = () => {
    dispatch(showModal({ status: true, type: "RegistrationForm" }));
  };

  return (
    <div className="cart-page-wrapper">
      {!productsLength
        ? <p>ooops, you have't added products yet</p>
        : <>
          <div className="cart-container">
            <ProductsContainer/>
            <TotalAmount total="cartTotal"/>
            {/* <CartTotal/> */}
          </div>
          <button onClick={showModalR}>SHOW REGISTRATION</button>
          <RegistrationModal/>
        </>
      }
    </div>
  );
};

export default Cart;