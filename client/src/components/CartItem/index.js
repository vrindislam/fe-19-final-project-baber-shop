import React, { useState, useEffect } from "react";
import "./style.less";

import { PlusCircleFilled, MinusCircleFilled, DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteFromCart, quantityHandler } from "../../store/cartItem/actionCartItem";

const CartItem = (props) => {
  console.log("CartItem---props",props);
  const dispatch = useDispatch();
  const { imageUrls, name, currentPrice, _id, productsInCart, } = props.product;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(productsInCart * currentPrice);
  }, [productsInCart, currentPrice]);
  const increment = () => {
    const before = props.product.productsInCart
    const after = {...props.product, productsInCart: before + 1}
    dispatch(quantityHandler(after))
  };

  console.log("props.productsInCart---props.productsInCart",props.productsInCart);
  const decrement = () => {
    const before = props.product.productsInCart
    const after = {...props.product, productsInCart: before - 1 }
    dispatch(quantityHandler(after))
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
      <span>{productsInCart}</span>
      {productsInCart !== 0 &&
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