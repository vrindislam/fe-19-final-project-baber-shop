import React, { useState, useEffect } from 'react'
import './style.less'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export const TotalAmount = (props) => {

  const products = useSelector(state => state.cart.products)

  const sumArray = []
    products.forEach(item => sumArray.push(item.currentPrice * item.cartQuantity))
  const totalMoney = Number(sumArray.reduce((a, b) => a + b, 0).toFixed(2))
  const [shipment, setShipment] = useState(0)
  useEffect(() => {
    if (totalMoney <= 1000) {
      setShipment(30)
    } else if (totalMoney < 2000) {
      setShipment(50)
    } else if (totalMoney < 3000) {
      setShipment(120)
    } else {setShipment(200)}
  }, [totalMoney])
  return (
    <>{props.total
      ? <div className="cart-total-wrapper">
        <p className="cart-total_header">total</p>
        <div>
          <div className="cart-total_main">
            <div>
              <span>{products.length} item(s)</span>
              <span>${totalMoney}</span>
            </div>
            <div>
              <span>Shipment</span>
              <span>${shipment}</span>
            </div>
          </div>
          <div className="cart-total_footer">
            <p>Order total</p>
            <p>${shipment + totalMoney}</p>
          </div>
        </div>
      </div>
      : <div className='popover-basket-wrapper'>
        <p>You have {products.length} goods in the basket</p>
        <p>For a total amount ${totalMoney}</p>
        <div className="basket-buttons-wrapper">
          <Button className='make-order-button'>Make an order</Button>
          <Link to="/cart">
            <Button className='to-basket-button' type={'primary'}>Go to Basket</Button>
          </Link>
        </div>
      </div>
    }</>
  )
}