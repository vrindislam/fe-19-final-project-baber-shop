import React, { useState, useEffect } from 'react'
import './style.less'
import { PlusCircleFilled, MinusCircleFilled, DeleteFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, increaseQuantity, decreaseQuantity } from '../../store/cartItem/actionCartItem'
import Ajax from '../../services/Ajax'

const { deleteRequest, put } = Ajax

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { imageUrls, name, currentPrice, _id, cartQuantity, } = props.product
  const { setProductsDB, cartQuantityDB } = props
  const [total, setTotal] = useState(0)
  const isAuth = useSelector(state => state.user.isAuthenticated)

  const riseQuantity = (_id) => {
    if (isAuth) {
      put('/cart/', _id).then(r => setProductsDB(r.products))
    } else {
      dispatch(increaseQuantity(_id))
    }
  }
  const downQuantity = (_id) => {
    if (isAuth) {
      deleteRequest('/cart/product', _id).then(r => setProductsDB(r.products))
    } else {
      dispatch(decreaseQuantity(_id))
    }
  }
  const deleteItem = (_id) => {
    if (isAuth) {
      deleteRequest('/cart', _id).then(r => setProductsDB(r.products))
    } else {
      dispatch(deleteFromCart(_id))
    }
  }

  useEffect(() => {
    if (isAuth) {
      setTotal(cartQuantityDB * currentPrice)
    } else {
      setTotal(cartQuantity * currentPrice)
    }
  }, [cartQuantity, cartQuantityDB, currentPrice, isAuth])
  return (
    <div className="cart-item-wrapper">
      <div className="cart-item_item-image-description">
        <div>
          <img className="cart-item_item-image" src={imageUrls[0]} alt=""/>
        </div>
        <div className="cart-item_item-description">
          <p>{name}</p>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Delectus doloribus explicabo veniam!
          </p>
        </div>
      </div>
      <div className="cart-item_item-handler">
        <div className="item-handler_title">
          <span>Price for ps</span>
          <span>Ps</span>
          <span>Total for Item</span>
        </div>
        <div className="item-handler_main">
          <div className="item-handler_main-price">{currentPrice}</div>
          <div className="item-handler_main-quantity">
            {cartQuantity === 0
              ? <MinusCircleFilled/>
              : <MinusCircleFilled onClick={() => downQuantity(_id)}/>
            }
            <span>{isAuth ? cartQuantityDB : cartQuantity}</span>
            <PlusCircleFilled onClick={() => riseQuantity(_id)}/>
          </div>
          <div className="item-handler_main-total">{total.toFixed(2)}</div>
          <div className="item-handler_main-basket" onClick={() => deleteItem(_id)}>
            <DeleteFilled/>
          </div>
        </div>
        <div className="item-handler_main-basket-mobile" onClick={() => deleteItem(_id)}>
          <DeleteFilled/>
        </div>
      </div>
    </div>
  )
}

export default CartItem