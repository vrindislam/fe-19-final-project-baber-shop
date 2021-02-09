import React from "react";
import "./style.less"
import CartItem from "../CartItem"
import { useSelector } from "react-redux";

const ProductsContainer = () => {
  const products = useSelector(state => state.cartProducts)
  console.log("products",products);
  const items = products.map(product => <CartItem product={product} key={product.itemNo}/>)

  return (
    <div className="cart-wrapper">
      {!products.length?<p>ooops, you have't added products yet</p> : items}
    </div>
  );
};

export default ProductsContainer;