import React from 'react';
import './styles.less';
import { Card, Button } from 'antd';

const ProductCard = ({ product }) => {
    console.log('Product from ProductCard -->', product);
    const {name, imageUrls, currentPrice, itemNo, categories} = product;

    const onAddToCart = (event) => {
        event.preventDefault();
        const { target } = event;
        const itemNo = target.closest('.ant-card').dataset.itemno;
        console.log('Target-->', target);
        console.log('ItemNo-->', itemNo);
        console.log('Product-->', product);

    }

    return (
        <>
            <li className='product-card-container'>
                <Card data-category={categories} data-itemno={itemNo} bordered={true} style={{ width: 305, height: 272, position: 'relative' }} hoverable={true} cover={
                    <img
                        className='product-card-img'
                        alt="example"
                        src={imageUrls[0]}
                    />
                }
                >
                    <div className='product-heading-wrapper'>
                        <p className='product-heading'>{name}</p>
                        <p className='product-price'>{currentPrice}$</p>
                    </div>
                    <div className='button-container'>
                        <Button type="primary" className='product-card-btn' onClick={onAddToCart}>Add to cart</Button>
                    </div>
                </Card>
            </li>
        </>
    )
}

export default ProductCard;