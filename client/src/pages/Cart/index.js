import React, {useState, useEffect} from "react";
import "./styles.less";
import ProductsContainer from "../../components/CartProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import {TotalAmount} from "../../components/CartTotalQuaintity"
import {resetCart} from '../../store/cartItem/actionCartItem'
import Ajax from '../../services/Ajax'
const{get, put} = Ajax

const Cart = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState([])
  const isAuth = useSelector(state => state.user.isAuthenticated)
  const products = useSelector(state => state.cartProducts.products)

  useEffect(() => {
    if (isAuth) {
      const items = products.map(el =>{
        return {product: el._id, cartQuantity: el.cartQuantity}
      })
      async function fetch(){
        const existingCart = await get('/cart')
        const cart = existingCart && await put('/cart','',{products:[...items]})
        setCart(cart.products)
        dispatch(resetCart())

      }
      fetch()
    }},[dispatch, isAuth, products])

  return (
    <div className="cart-page-wrapper">
      {!products.length && !cart.length || !products.length && !isAuth
        ? <p>add an item, please</p>
        : <>
          <div className="cart-container">
            <ProductsContainer products={isAuth? cart : products } isAuth={isAuth} setCart={setCart}/>
            <TotalAmount total="cartTotal"/>
          </div>
        </>
      }
    </div>
  );
};

export default Cart;