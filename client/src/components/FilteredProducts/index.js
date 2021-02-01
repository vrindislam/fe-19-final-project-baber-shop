import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import { SyncOutlined } from '@ant-design/icons'
import './style.less'
import axios from 'axios'
import ProductCard from '../ProductCard'

const FilteredProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [productsPerPage, setProductsPerPage] = useState(7)
  const [currentPage] = useState(1)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const res = await axios.get(`${process.env.REACT_APP_API}/products/filter?startPage=${currentPage}&perPage=${productsPerPage}`)
      setProducts(res.data.products)
      setLoading(false)
    }
    fetchProducts()
  }, [productsPerPage, currentPage])

  const onLoadMore = () => {
    setProductsPerPage(prevValue => prevValue + 7)
  }

  const items = products.map(product =>
    <ProductCard key={product._id} product={product}/>
  )
  const lastItem = products[products.length - 1]
  console.log('dsdsdsdsdsdsdddd',lastItem)

  return (
    <>
      <ul className='filtered-products-container'>
        {items}
        <Card
          className='load-more-btn'
          bordered={true}
          style={{ width: 305, height: 272, backgroundColor: '#C4C4C4' }}
          hoverable={true}
          onClick={onLoadMore}
        >
          <SyncOutlined style={{ color: '#000000' }} spin={!!loading}/>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}>Load More...</p>
        </Card>}

      </ul>
    </>

  )
}

export default FilteredProducts
