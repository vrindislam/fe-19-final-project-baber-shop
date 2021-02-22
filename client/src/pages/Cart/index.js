import React, {useEffect} from "react";
import "./styles.less";
import ProductsContainer from "../../components/CartProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import {TotalAmount} from "../../components/CartTotalQuaintity"
// import {updateCart} from '../../store/cart/actionCart'
import Checkout from "../../components/Checkout";
import Ajax from '../../services/Ajax'
const{get, put, post} = Ajax

const Cart = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuthenticated)
  const products = useSelector(state => state.cart.products)

  useEffect(() => {
    if (isAuth) {
      const items = products.map(el =>{
        return {product: el._id, cartQuantity: el.cartQuantity}
      })
      async function fetch(){
        const existingCart = await get('/cart')
        existingCart
          ? await put('/cart','',{products:[...items]})
          : await post('/cart',{products:[...items]})
        // setProductsDB(cart.products)

      }
      fetch()
    }},[dispatch, isAuth, products])

  return (
    <div className="cart-page-wrapper">
      {!products.length
        ? <p>add an item, please</p>
        : <>
          <div className="cart-container">
            <ProductsContainer products={products }/>
            <TotalAmount total="cartTotal"/>
          </div>
        </>
      }
    <Checkout/>
    </div>
  );
};

export default Cart;