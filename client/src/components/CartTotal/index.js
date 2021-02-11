import React from "react";
import "./style.less";
import {useSelector} from 'react-redux'

const CartTotal = () => {
  const productsLength = useSelector(state => state.cartProducts.length)
  const products = useSelector(state => state.cartProducts)
  const sumArray = []
  products.forEach(item => sumArray.push(item.currentPrice * item.productsInCart))
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalMoney = sumArray.reduce(reducer)
  return (
    <div className="cart-total-wrapper">
      <p>TOTAL</p>
      <p>{productsLength}item<span>$ {totalMoney}</span></p>
      <p>Shipment<span>$ {}</span></p>
      <p>Order Total</p>
      <p>{products}</p>
    </div>
  );
};

export default CartTotal;