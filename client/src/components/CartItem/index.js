import React, { useState, useEffect } from "react";
import "./style.less";

import { PlusCircleFilled, MinusCircleFilled, DeleteFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, increaseCart, decreaseCart } from "../../store/cartItem/actionCartItem";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { imageUrls, name, currentPrice, _id, productsInCart, itemNo } = props.product;
  const amountRedux = useSelector(state => state.cartProducts);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(productsInCart * currentPrice);
  }, [productsInCart, currentPrice]);
  const increment = () => {
    const productWithQuantity = { ...props.product, productsInCart: props.productsInCart + 1 };
    const expandedAmountRedux = [...amountRedux, productWithQuantity]
    const newArray = []
    expandedAmountRedux.forEach(item => {
      if((item.itemNo === itemNo && item.productsInCart) !== productsInCart || item.itemNo !== itemNo )  {
        newArray.push(item)
      }
    })
    dispatch(increaseCart(newArray))
  };

  console.log("props.productsInCart---props.productsInCart",props.productsInCart);
  const decrement = () => {
    const productWithQuantityDecrease = { ...props.product, productsInCart: props.productsInCart - 1 };
    const expandedAmountRedux = [...amountRedux, productWithQuantityDecrease]
    const rrtty = Array.from(new Set(expandedAmountRedux))
    console.log("kjnkjkjjjkjdofgjdgjdogdgod",rrtty);
    const newArray = []
    expandedAmountRedux.forEach(item => {
      if((item.itemNo === itemNo && item.productsInCart) !== productsInCart || item.itemNo !== itemNo )  {
        newArray.push(item)
      }
    })
    dispatch(decreaseCart(newArray))
  };
return (
  <div className="cart-item-wrapper">
    <div>
      <img className="cart-item-image" src={imageUrls[0]} alt=""/>
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
      <span>{props.productsInCart}</span>
      {props.productsInCart !== 0 &&
      <MinusCircleFilled onClick={decrement}/>
      }
    </div>
    <div className="cart-item-total">{total}</div>
    <div onClick={() => dispatch(deleteFromCart(_id))} className="delete-from-basket-icon">
      <DeleteFilled/>
    </div>
  </div>
);
};

export default CartItem;