import React from "react";
import { useDispatch } from "react-redux";
import './styles.less';
import { Card, Button } from 'antd';
import {addToCart} from "../../store/cartItem/actionCartItem";

const ProductCard = ({ product }) => {
    const {name, currentPrice, itemNo, categories, imageUrls} = product;
    const dispatch = useDispatch();

    const onAddToCart = (e) => {
        e.preventDefault();
        const newProduct = {...product, cartQuantity: + 1}
        dispatch(addToCart(newProduct));
    }

    return (
        <>
            <li className='product-card-container'>
                    <Card data-category={categories} src='google.com' data-itemno={itemNo} bordered={true} hoverable={true} cover={
                        <img className='product-card-img' alt="product-item" src={imageUrls}/>}>
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