import React from 'react'
import './popoverStyles.less'
import { Popover,Badge } from "antd";
import { Link } from "react-router-dom";
import {content} from './popoverBasketContent'

const PopoverBasket = () => {
  const someValueFromRedux = 5

  return (
      <Popover placement="bottom" align={{ offset: [0, 30] }} className='popover-basket-div' content={content} trigger="hover">
        <Link to="/cart">
          <Badge className='basket-badge' count={someValueFromRedux} size="small" offset={[-25, -15]}>
          </Badge>
          <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>Cart</span>
        </Link>
      </Popover>
  )
}

export default PopoverBasket


