import React from 'react';
import { useDispatch } from "react-redux";
import './styles.less';
import { Card, Button } from 'antd';
import {cartAction} from "../../store/cart/cartAction";

const ProductCard = ({ product }) => {

    const {name, imageUrls, currentPrice, itemNo, categories, productUrl} = product;
    const dispatch = useDispatch();

    const onAddToCart = (e) => {
        e.preventDefault();
        dispatch(cartAction(product));
    }

    return (
        <>
            <li className='product-card-container'>
                <a href={productUrl}>
                    <Card data-category={categories} src='google.com' data-itemno={itemNo} bordered={true} style={{ width: 305, height: 272, position: 'relative' }} hoverable={true} cover={
                        <img
                            className='product-card-img'
                            alt="product-item"
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
                </a>
            </li>
        </>
    )
}

export default ProductCard;