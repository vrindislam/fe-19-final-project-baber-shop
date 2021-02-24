import React from 'react'
import './style.less'
import CartItem from '../CartItem'

const ProductsContainer = ({ products }) => {
  // console.log("ProductsContainer------------->>>",products);
  const items = products.map(product =>
    <CartItem
      product={product}
      key={product.itemNo}
    />)

  return (
    <div>
      <div className="cart-container_title">
        <p>Shopping cart</p>
        <p>
          <span>price for ps</span>
          <span>Ps</span>
          <span>Total for Item</span>
        </p>
      </div>
      <div className="cart-container_main">
        {items}
      </div>
    </div>
  )
}

export default ProductsContainer