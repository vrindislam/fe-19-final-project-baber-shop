import React, {useState,useEffect} from "react";
import "./style.less"
import CartItem from "../CartItem"
import { useSelector } from "react-redux";


const ProductsContainer = () => {
  const products = useSelector(state => state.cartProducts)
  const [products2, setProducts2] = useState([])
  useEffect(() => {
    setProducts2(products)
  },[products])

  const items = products2.map(product =>
    <CartItem product={product} key={product.itemNo} productsInCart={product.productsInCart}/>)

  return (
    <div className="cart-wrapper">
      {!products.length?<p>ooops, you have't added products yet</p> : items}
    </div>
  );
};

export default ProductsContainer;