import React, {useEffect, useState} from "react";
import {StarTwoTone} from '@ant-design/icons';
import {Col, Typography} from 'antd';
import '../style.less'
import Ajax from "../../../services/Ajax";
import ProductCard from "../../ProductCard";

const {get} = Ajax;


const {Title} = Typography;

const UserFavourites = () => {

    const [wishlist, setWishlist] = useState([]);
    const updateWishlist = (id) => {
        const updatedWishlist = wishlist.filter(wishlist => wishlist._id !== id)
        setWishlist(updatedWishlist);


    }
    useEffect(() => {

            let cleanupFunction = false;
            get('/wishlist')
                .then(wishlist => {
                    if (!cleanupFunction) {
                        if (wishlist !== null) {
                            setWishlist(wishlist.products || [])
                        }
                    }
                })
            return () => cleanupFunction = true

        },
        []
    )

    return (
        <>
            {(wishlist.length > 0)
                ?
                <Col xs={{span: 24}}  sm={{span: 14, offset: 1}} md={{span: 14, offset: 1}} lg={{span: 13, offset: 2}} xl={{span: 13, offset: 2}}>
                    <div className='favouritesContainer'>
                        {wishlist.map(product => <ProductCard product={product} key={product._id}
                                                              refresh={updateWishlist}/>)}
                    </div>
                </Col>
                :
                <Col className='userProfileOrderFav-emptyContainer' xs={{span: 20, offset: 2}}
                     sm={{span: 8, offset: 2}}
                     md={{span: 8, offset: 2}} xl={{span: 8, offset: 2}}>
                    <Title>My favourites</Title>
                    <StarTwoTone twoToneColor='#fadb14' className='userProfileOrderFav-icon'/>
                    <Title level={3}>You haven't products in your favourite list yet.</Title>
                </Col>
            }
        </>
    )
}

export default UserFavourites;