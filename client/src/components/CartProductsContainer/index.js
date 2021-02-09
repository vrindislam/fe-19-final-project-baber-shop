import React from "react";
import "./style.less"
import CartItem from "../CartItem"
// import { useDispatch, useSelector } from "react-redux";

const ProductsContainer = () => {
  // const products = useSelector(state => state.cartProducts)
  // console.log("products--->>>", products);
  //
  // useEffect(() => {
  //   localStorage.setItem("products-in-Basket",JSON.stringify(products))
  // },[products])
// const items = products.map(product => <CartItem product={product} key={product.itemNo}/>)
  const products = JSON.parse(localStorage.getItem("products-in-Basket"))
  const items = products.map(product => <CartItem product={product} key={product.itemNo}/>)

  return (
    <div className="cart-wrapper">
      {items}
    </div>
  );
};

export default ProductsContainer;