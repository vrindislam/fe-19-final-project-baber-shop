import React from "react";
import "./style.less";
import {useSelector} from 'react-redux'

const CartTotal = () => {
  const products = useSelector(state => state.cartProducts.length)

  return (
    <div className="cart-total-wrapper">
      <p>TOTAL</p>
      <p>{products}item<span>$ {products}</span></p>
      <p>Shipment<span>$ {}</span></p>
      <p>Order Total</p>
      <p>{products}</p>
    </div>
  );
};

export default CartTotal;