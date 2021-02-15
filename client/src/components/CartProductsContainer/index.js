import React from "react";
import "./style.less"
import CartItem from "../CartItem"
import { useSelector } from "react-redux";


const ProductsContainer = () => {
  const products = useSelector(state => state.cartProducts.products)

  const items = products.map(product =>
    // <>
    // <CartItem product={product} key={product.itemNo} cartQuantity={product.cartQuantity}/>
    // {/*<div className="psevdo-div" key={product.itemNo+1}> </div>*/}
    // </>
    // )
    <CartItem product={product} key={product.itemNo} cartQuantity={product.cartQuantity}/>)

  return (
    <div>
      <div className="cart-container_title">
      {/* <div className="cart-wrapper-title"> */}
        <p>Shopping cart</p>
        <p>
          <span>price for ps</span>
          <span>Ps</span>
          <span>Total for Item</span>
        </p>
      </div>
      <div className="cart-container_main">
      {/* <div className="cart-wrapper"> */}
        {items}
      </div>
    </div>
  );
};

export default ProductsContainer;