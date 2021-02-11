import React from "react";
import "./style.less";
import {useSelector} from 'react-redux'

const CartTotal = () => {
  const productsLength = useSelector(state => state.cartProducts.length)
  // console.log("productsLength",productsLength);
  const products = useSelector(state => state.cartProducts)
  // console.log("products",products);
  const sumArray = []
  if(products !== 0) {
    products.forEach(item => sumArray.push(item.currentPrice * item.productsInCart))
    // console.log("sumArray",sumArray);
  }
  const totalMoney = sumArray.reduce((a,b) => a+b,0)
  // console.log("totalMoney",totalMoney);
  return (
    <div className="cart-total-wrapper">
      <p>TOTAL</p>
      <p>{productsLength}item<span>${totalMoney}
      </span></p>
      <p>Shipment<span>$ {}</span></p>
      <p>Order Total</p>
      <p>{totalMoney}</p>
    </div>
  );
};

export default CartTotal;