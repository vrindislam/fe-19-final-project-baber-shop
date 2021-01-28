import React from 'react'
import { Button } from "antd";
import { Link } from "react-router-dom";

export const content = (
  <div className='popover-basket-div'>
    <p>You have 5 goods in the basket</p>
    <p>For a total amount ...$</p>
    <Button className='make-order-button'>Make an order</Button>
    <Link to="/cart">
      <Button className='to-basket-button' type={'primary'} >Go to Basket</Button>
    </Link>
  </div>
);