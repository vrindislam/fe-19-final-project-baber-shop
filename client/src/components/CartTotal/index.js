import React from "react";
import "./style.less";
import {useSelector} from 'react-redux'

const CartTotal = () => {
  const productsLength = useSelector(state => state.cartProducts.length)
  const products = useSelector(state => state.cartProducts)
  console.log("CartTotal----products--->>>",products,"----typeof---products---->",typeof products);
  const sumArray = []
  if(products !== []) {
    products.forEach(item => sumArray.push(item.currentPrice * item.productsInCart))
  }
  const totalMoney = sumArray.reduce((a, b) => a + b, 0)
  return (
    <div className="cart-total-wrapper">
      <p>TOTAL</p>
      <p>{productsLength}item<span>
        ${totalMoney}
      </span></p>
      <p>Shipment<span>$ {}</span></p>
      <p>Order Total</p>
      <p>
        {totalMoney}
      </p>
    </div>
  );
};

export default CartTotal;