import React from 'react'
import { Popover, Button, Badge } from "antd";
import { Link } from "react-router-dom";
import './popoverStyles.less'

const content = (
  <div className='popover-basket-div'>
    <p>You have 12 goods in the basket</p>
    <p>For a total amount ...$</p>
    <Button className='popover-order-button' >Make an order</Button>
    <Button className='popover-goToBasket-button' type={'primary'}>Go to Basket</Button>
  </div>
);
// const buttonWidth = 70;

const PopoverBasket = () => {

  return (
      <Popover placement="bottom" content={content} trigger="hover">
        <Link to="/cart">
          <Badge className='basket-badge' count={2} offset={[9, 0]}>
            <span style={{ color: "rgba(255, 255, 255, 0.65)" }}></span>
          </Badge>
        </Link>
      </Popover>
  )
}

export default PopoverBasket


