import React, { useEffect } from "react";
import "./styles.less";
import ProductsContainer from "../../components/CartProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { TotalAmount } from "../../components/CartTotalQuaintity";
import { updateCart } from "../../store/cart/actionCart";
import Checkout from "../../components/Checkout";
import Ajax from "../../services/Ajax";

const { get, put, post } = Ajax;

const Cart = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuthenticated);
  const products = useSelector(state => state.cart.products.products);
  console.log("Cart-products--->>", products);
  // console.log("Cart====Cart===Cart",products);
  // const updatedPrd = []
  // products.forEach(product => console.log("fkedjfjfhjfhfj",product.cartQuantity,"=======",product.product._id))
  //
  // products.forEach(product => updatedPrd.push({product: product.product._id, cartQuantity: product.cartQuantity}));
  // console.log("------updatedPrd-------",updatedPrd);
  // imageUrls, name, currentPrice, _id
  useEffect(() => {
    if (isAuth) {
      const items = products.map(product => {
        return { product: product.product._id, cartQuantity: product.cartQuantity };
      });
      console.log("useEffect--------------", items);

      async function fetch() {
        const existingCart = await get("/cart");
        // if (existingCart === null) {
        //   const emptyArray = []
        //     ? await put("/cart", "", { products: [...items] })
        //     : await post("/cart", { products: [...items] });
        //
        //   // dispatch(updateCart(products));
        //   // dispatch(updateCart(emptyArray));
        //   console.log("null");
        // } else {
          console.log("existingCart----existingCart", existingCart);
          console.log("existingCart-----products------>>>", existingCart.products);

          existingCart
            ? await put("/cart", "", { products: [...items] })
            : await post("/cart", { products: [...items] });

          const newExistingCart = [...new Set (existingCart.products)];
          console.log("<<<------newExistingCart--------->>>", newExistingCart);
          dispatch(updateCart(newExistingCart));
        // }
      }

      fetch();
    }
  }, [dispatch, isAuth, products]);

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