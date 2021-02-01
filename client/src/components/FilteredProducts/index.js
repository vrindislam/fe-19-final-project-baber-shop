import React, { useState, useEffect } from 'react'
import { Card, Pagination } from 'antd'
import { SyncOutlined } from '@ant-design/icons'
import './style.less'
import axios from 'axios'

import ProductCard from '../ProductCard'

const FilteredProducts = () => {
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [productsPerPage, setProductsPerPage] = useState(7)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const res = await axios.get(`${process.env.REACT_APP_API}/products/filter?startPage=${currentPage}&perPage=${productsPerPage}`)
      const resAllProducts = await axios.get(`${process.env.REACT_APP_API}/products`)
      setProducts(res.data.products)
      setAllProducts(resAllProducts.data)
      setLoading(false)
    }
    fetchProducts()
  }, [productsPerPage, currentPage])

  const onLoadMore = () => {
    setProductsPerPage(prevValue => prevValue + 7)
  }
  const onChange = page => {
    setCurrentPage(page)
  }
  const items = products.map(product =>
    <ProductCard key={product._id} product={product}/>
  )

  return (
    <>
      <ul className='filtered-products-container'>
        {items}
        <Card
          className='load-more-btn'
          src='google.com'
          bordered={true}
          style={{ width: 305, height: 272, backgroundColor: '#C4C4C4' }}
          hoverable={true}
          onClick={onLoadMore}
        >
          <SyncOutlined style={{ color: '#000000' }} spin={!!loading}/>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}>Load More...</p>
        </Card>

      </ul>
      <Pagination onChange={onChange} pageSize={productsPerPage} current={currentPage} total={allProducts.length}/>
    </>

  )
}

export default FilteredProducts
