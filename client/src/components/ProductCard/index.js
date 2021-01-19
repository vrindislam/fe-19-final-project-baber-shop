import React from 'react';
import './styles.less';

const ProductCard = () => {

    return (
        <div className='product-card-container'>
            <p className='product-card-heading'>Lorem ipsum</p>
            <p className='price-card-price'>20$</p>
            <a className='product-card-img' href='google.com'>
                <img src="https://livecdn.wmarket.com.ua/media/catalog/product/cache/1/small_image/250x250/d58d44b981214661663244ef00ea7e30/h/y/hyjytjyuk.jpg" alt="card item"/>
            </a>
            <button className='product-card-btn'>Add to cart</button>
        </div>
    )
}

export default ProductCard;