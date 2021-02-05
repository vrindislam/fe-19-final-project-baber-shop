import React from 'react'
import './popoverStyles.less'
import { Popover,Badge } from "antd";
import { Link } from "react-router-dom";
import {content} from './popoverBasketContent'

const PopoverBasket = () => {
  const someValueFromRedux = 5

  return (
      <Popover placement="bottom" align={{ offset: [-19, 0] }} className='popover-basket-div' content={content} trigger="hover">
        <Link to="/cart">
          <Badge className='basket-badge' count={someValueFromRedux} size="small" offset={[-20, -20]}>
          </Badge>
          <span style={{ color: "black" }}>Cart</span>
        </Link>
      </Popover>
  )
}

export default PopoverBasket


