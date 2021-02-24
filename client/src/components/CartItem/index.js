import React from 'react'
import './style.less'
import { PlusCircleFilled, MinusCircleFilled, DeleteFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, increaseQuantity, decreaseQuantity } from '../../store/cart/actionCart'


const CartItem = (props) => {
  const dispatch = useDispatch()
  // console.log("CartItem-------------->>>>",props.product);
  const cartQuantity = props.product.cartQuantity
  const { imageUrls, name, currentPrice, _id } = props.product.product
  // console.log("imageUrls, name, currentPrice, _id",imageUrls, name, currentPrice, _id);
  // console.log("props.product.product>>>>>>---->>>>",props.product.product);
  // const [total, setTotal] = useState(0)
  const isAuth = useSelector(state => state.user.isAuthenticated)

  // useEffect(() => {
  //     setTotal(cartQuantity * currentPrice)
  // }, [currentPrice, cartQuantity])
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
              : <MinusCircleFilled onClick={() =>  dispatch(decreaseQuantity(_id,isAuth))}/>
            }
            <span>{cartQuantity}</span>
            <PlusCircleFilled onClick={() => dispatch(increaseQuantity(_id,isAuth))}/>
          </div>
          <div className="item-handler_main-total">{(currentPrice * cartQuantity).toFixed(2)}</div>
          <div className="item-handler_main-basket" onClick={() => dispatch(deleteFromCart(_id, isAuth))}>
            <DeleteFilled/>
          </div>
        </div>
        <div className="item-handler_main-basket-mobile" onClick={() => dispatch(deleteFromCart(_id, isAuth))}>
          <DeleteFilled/>
        </div>
      </div>
    </div>
  )
}

export default CartItem