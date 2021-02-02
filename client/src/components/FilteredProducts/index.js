import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import { SyncOutlined } from '@ant-design/icons'
import './styles.less';
import ProductCard from '../ProductCard'
import Ajax from "../../services/Ajax";

const FilteredProducts = ({queryString}) => {

    const [loading, setLoading] = useState(false);
    const [productsPerPage, setProductsPerPage] = useState(2);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showLoading, setShow] = useState(true);

    useEffect(()=>{
        async function fetch(){
            setLoading(true);
            const data = await Ajax.get(`/products/filter?perPage=${productsPerPage}&${queryString}`);
            setFilteredProducts(data.products);
            setLoading(false);
            if (data.products.length === data.productsQuantity){
                setShow(false);
            } else {
                setShow(true)
            }

        }
        fetch()
    }, [queryString, productsPerPage])

    const onLoadMore = () => {
        setProductsPerPage(prevValue => prevValue + 2)
    }
    const showLoadingContainer = {
        display: showLoading ? 'flex' : 'none'
    }

    return (
        <>
            <div className='filtered-products-container'>
                {filteredProducts.map(item =>
                    <ProductCard key={item._id} product={item}/>
                )}
                <Card
                    className='load-more-btn'
                    bordered={true}
                    style={showLoadingContainer}
                    hoverable={true}
                    onClick={onLoadMore}
                >
                    <SyncOutlined style={{ color: '#000000' }} spin={!!loading}/>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#000000' }}>Load More...</p>
                </Card>
            </div>
        </>

    )
}

export default FilteredProducts