import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {cartAction} from "../../store/cart/cartAction";
import {Button, Card} from 'antd';
import {StarFilled, StarOutlined} from "@ant-design/icons";
import Ajax from "../../services/Ajax";
import WishListService from '../../services/WishListServise'
import './styles.less';

const {put, deleteRequest} = Ajax;
const {checkIfProductInWishList} = WishListService


const ProductCard = ({product, refresh}) => {

    const {name, currentPrice, itemNo, categories, imageUrls, _id} = product;
    const {exp, isAuthenticated, isAdmin} = useSelector(state => ({...state.user}));
    const history = useHistory();
    const dispatch = useDispatch();
    const [inWishlist, setInWishlist] = useState(false);

    const onAddToCart = (e) => {
        e.preventDefault();
        dispatch(cartAction(product));
    }

    const addToWishlist = async () => {
        if (!(isAuthenticated && !isAdmin && localStorage.token && exp && (exp > Date.now() / 1000))) {
            history.push('/login');
        } else {
            if (!inWishlist) {
                await put(`/wishlist/`, _id)
                setInWishlist(true)
                if (typeof (refresh) === 'function') refresh(_id)

            } else {
                await deleteRequest(`/wishlist/`, _id)
                setInWishlist(false)
                if (typeof (refresh) === 'function') refresh(_id)
            }
        }
    }


    useEffect(() => {
        if ((isAuthenticated && !isAdmin && localStorage.token && exp && (exp > Date.now() / 1000))) {
            return checkIfProductInWishList(_id, setInWishlist, true);
        }
    }, [_id, isAuthenticated, isAdmin, exp]);

    const inWishlistIcon = inWishlist
        ? <StarFilled className='favourite-icon'/>
        : <StarOutlined className='favourite-icon'/>;

    return (
        <>
            <li className='product-card-container'>
                <Card data-category={categories}
                      src='google.com'
                      data-itemno={itemNo}
                      bordered={true}
                      hoverable={true}
                      cover={
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
                        <Button className='btn-favourite' onClick={addToWishlist}>
                            {inWishlistIcon}
                        </Button>
                        <Button type="primary" className='product-card-btn' onClick={onAddToCart}>
                            Add to cart
                        </Button>
                    </div>
                </Card>
            </li>
        </>
    )
}

export default ProductCard;