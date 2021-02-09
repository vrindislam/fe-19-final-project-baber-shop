import React from "react";
import { useDispatch } from "react-redux";
import "./styles.less";
import { Card, Button } from "antd";
import { addToCart } from "../../store/cartItem/actionCartItem";

const ProductCard = ({ product }) => {

  const { name, currentPrice, itemNo, categories, imageUrls } = product;
  const dispatch = useDispatch();

  const onAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    if(localStorage.getItem("products-in-Basket") === null) {
      const LocalStorageProducts = []
      LocalStorageProducts.push(product)
      localStorage.setItem("products-in-Basket",JSON.stringify(LocalStorageProducts))
    }
    else {
      const LocalStorageProducts = JSON.parse(localStorage.getItem("products-in-Basket")).filter(productLs => productLs.itemNo !== product.itemNo)
      LocalStorageProducts.push(product)
      localStorage.setItem("products-in-Basket",JSON.stringify(LocalStorageProducts))
    }
  };

  return (
    <>
      <li className='product-card-container'>
        <Card data-category={categories} src='google.com' data-itemno={itemNo} bordered={true} hoverable={true} cover={
          <img
            className='product-card-img'
            alt="product-item"
            src={imageUrls}
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
  );
};

export default ProductCard;