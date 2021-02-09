import React, {useState, useEffect} from "react";
import "./style.less";

import { PlusCircleFilled, MinusCircleFilled,DeleteFilled } from '@ant-design/icons';
const CartItem = (props) => {
  const { imageUrls, name, currentPrice } = props.product;

  const [amount,setAmount] = useState(1)
  const [total,setTotal] = useState(0)

  const upAmount = amount

  console.log("<-----upAmount----->",upAmount);
  useEffect(() => {
    setTotal(amount * currentPrice)
  },[amount, currentPrice])
  const increment = () => {
    setAmount(amount => amount + 1)
  }
  const decrement = () => {
    setAmount(amount => amount - 1)
  }
  return (
    <div className="cart-item-wrapper">
      <div>
        <img className="cart-item-image" src={imageUrls[0]} alt="" />
      </div>
      <div className="cart-item-meta">
        <p>{name}</p>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Delectus doloribus explicabo veniam!
          </p>
      </div>
      <div className="cart-item-price">{currentPrice}</div>
        <div className="cart-item-amount">
          <PlusCircleFilled onClick={increment}/>
          <span>{amount}</span>
          <MinusCircleFilled onClick={decrement}/>
        </div>
      <div className="cart-item-total">{total}</div>
      <div>
        <DeleteFilled />
      </div>
    </div>
  );
};

export default CartItem;