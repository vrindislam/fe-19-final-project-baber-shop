import React from "react";
import "./style.less";
import {useSelector} from 'react-redux'

const CartTotal = () => {
  const productsLength = useSelector(state => state.cartProducts.products.length)
  const products = useSelector(state => state.cartProducts.products);

  const sumArray = []
  products.forEach(item => sumArray.push(item.currentPrice * item.cartQuantity))
  const totalMoney = Number(sumArray.reduce((a, b) => a + b, 0).toFixed(2))
  const shipment = 30
  return (
    <div className="cart-total-wrapper">
      <p className="bold total-header">total</p>
      <div>
        <div className="cart-total-div">
          <div>
            <span>{productsLength} item(s)</span>
            <span>${totalMoney}</span>
          </div>
          <div>
            <span>Shipment</span>
            <span>${shipment}</span>
          </div>
        </div>
        <div className="some-div">
          <p>order Total</p>
          <p className="bold total-with-shipment">${totalMoney+shipment}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;