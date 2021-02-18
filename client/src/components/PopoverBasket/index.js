import React, {useState,useEffect} from 'react'
import './popoverStyles.less'
import { Popover, Badge } from 'antd'
import { Link } from 'react-router-dom'
import { content } from './popoverBasketContent'
import { iconCart } from '../Header/img'
import { useSelector } from 'react-redux'
import Ajax from '../../services/Ajax'
const {get} = Ajax
const PopoverBasket = () => {
  const someValueFromRedux = useSelector(state => state.cartProducts.products.length)
  const isAuth = useSelector(state => state.user.isAuthenticated)
  const [productsDB, setProductsDB] = useState([])

  useEffect(() => {
    if (isAuth) {
      async function fetch(){
        const queryDB = await get('/cart')
        setProductsDB(queryDB.products)
      }
      fetch()
    }}, [isAuth])


  console.log('someValueFromRedux', someValueFromRedux)
  return (
    <Popover placement="bottomRight" align={{ offset: [-19, 0] }} className='popover-basket-div' content={content}
             trigger="hover">
      <Link to="/cart">
        <img className="img-cart" src={iconCart} alt="icon"/>
        <Badge className='basket-badge' count={isAuth? productsDB.length : someValueFromRedux} size="small"
               offset={[-20, -20]}>
        </Badge>
        <span className="popover-basket-span" style={{ color: 'black' }}>Cart</span>
      </Link>
    </Popover>
  )
}

export default PopoverBasket


