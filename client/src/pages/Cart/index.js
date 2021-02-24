import React from "react";
import "./styles.less";
import ProductsContainer from "../../components/CartProductsContainer";
import { useSelector } from "react-redux";
import { TotalAmount } from "../../components/CartTotalQuaintity";
import Checkout from "../../components/Checkout";

const Cart = () => {
  const products = useSelector(state => state.cart.products.products);
  console.log("Cart-products--->>", products);

  return (
    <div className="cart-page-wrapper">
      {!products.length
        ? <p>add an item, please</p>
        : <>
          <div className="cart-container">
            <ProductsContainer products={products}/>
            <TotalAmount total="cartTotal"/>
          </div>
        </>
      }
      <Checkout/>
    </div>
  );
};

export default Cart;