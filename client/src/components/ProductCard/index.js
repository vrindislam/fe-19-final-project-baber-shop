import React from 'react';
import './styles.less';
import { Card, Button } from 'antd';

const ProductCard = ({ product }) => {
    console.log('Product from ProductCard -->', product);
    const {name, imageUrls, currentPrice, itemNo, categories} = product;

    const onAddToCart = (event) => {
        event.preventDefault();
        const { target } = event;
        const itemNo = target.closest('.product-card-container').dataset.itemno;
        console.log('Target-->', target);
        console.log('ItemNo-->', itemNo);

    }

    return (
        <>
            <Card className='product-card-container' data-category={categories} data-itemno={itemNo} bordered={true} style={{ width: 305, height: 272, position: 'relative' }} hoverable={true} cover={
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
        </>
    )
}

// const ProductCard = () => {
//
//     return (
//         <div className='product-card-container'>
//             <a className='product-card-img' href='google.com'>
//                 <img src="https://livecdn.wmarket.com.ua/media/catalog/product/cache/1/small_image/250x250/d58d44b981214661663244ef00ea7e30/h/y/hyjytjyuk.jpg" alt="card item"/>
//             </a>
//             <p className='product-card-heading'>Lorem ipsum</p>
//             <p className='product-card-price'>20$</p>
//             <button className='product-card-btn'>Add to cart</button>
//         </div>
//     )
// }

export default ProductCard;