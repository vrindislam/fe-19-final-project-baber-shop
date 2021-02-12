import React, { useState, useEffect } from "react";
import "./style.less";

import { PlusCircleFilled, MinusCircleFilled, DeleteFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteFromCart, increaseQuantity, decreaseQuantity } from "../../store/cartItem/actionCartItem";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { imageUrls, name, currentPrice, _id, cartQuantity, } = props.product;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cartQuantity * currentPrice);
  }, [cartQuantity, currentPrice]);
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
    <div className="plus-minus-div">
      <div className="cart-item-price">{currentPrice}</div>
      <div className="cart-item-amount">
        <PlusCircleFilled onClick={()=> dispatch(increaseQuantity(_id))}/>
        <span>{cartQuantity}</span>
        {cartQuantity === 0
          ? <MinusCircleFilled />
          : <MinusCircleFilled onClick={()=> dispatch(decreaseQuantity(_id))}/>
        }
      </div>
      <div className="cart-item-total">{total.toFixed(2)}</div>
      <div className="cart-item-basket-icon" onClick={() => dispatch(deleteFromCart(_id))}
        // className="delete-from-basket-icon"
      >
        <DeleteFilled/>
      </div>
    </div>

    {/* <div className="cart-item-price">{currentPrice}</div> */}
    {/* <div className="cart-item-amount"> */}
    {/*  <PlusCircleFilled onClick={()=> dispatch(increaseQuantity(_id))}/> */}
    {/*  <span>{productsInCart}</span> */}
    {/*  {productsInCart === 0 */}
    {/*    ? <MinusCircleFilled /> */}
    {/*    : <MinusCircleFilled onClick={()=> dispatch(decreaseQuantity(_id))}/> */}
    {/*  } */}
    {/* </div> */}
    {/* <div className="cart-item-total">{total.toFixed(2)}</div> */}
    {/* <div className="cart-item-basket-icon" onClick={() => dispatch(deleteFromCart(_id))} */}
    {/*     // className="delete-from-basket-icon" */}
    {/* > */}
    {/*  <DeleteFilled/> */}
    {/* </div> */}
  </div>
);
};

export default CartItem;