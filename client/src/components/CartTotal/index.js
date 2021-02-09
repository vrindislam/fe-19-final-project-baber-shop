import React from "react";
import "./style.less";

const CartTotal = () => {

  const someValue = 3;

  return (
    <div className="cart-total-wrapper">
      <p>TOTAL</p>
      <p>{someValue}item<span>$ {someValue}</span></p>
      <p>Shipment<span>$ {}</span></p>
      <p>Order Total</p>
      <p>{someValue}</p>
    </div>
  );
};

export default CartTotal;