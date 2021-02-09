import React from "react";
import "./styles.less";
import ProductsContainer from "../../components/CartProductsContainer";
import CartTotal from "../../components/CartTotal";

const Cart = (props) => {
  return (
    <div className="cart-wrapper-div">
      <ProductsContainer/>
      <CartTotal/>
    </div>
  );
};

export default Cart;