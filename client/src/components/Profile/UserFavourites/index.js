import React, {useEffect, useState} from "react";
import {StarTwoTone} from '@ant-design/icons';
import {Col, Typography} from 'antd';
import Ajax from "../../../services/Ajax";
import ProductCard from "../../ProductCard";
import Preloader from "../../Preloader";
import '../style.less'

const {get} = Ajax;


const {Title} = Typography;

const UserFavourites = () => {
    const [loading, setLoading] = useState(true);
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
                        setLoading(false)
                        if (wishlist !== null) {
                            setWishlist(wishlist.products || [])
                        }
                    }
                })
            return () => cleanupFunction = true
        }, []
    )

    return (
        <>
            {
                loading
                    ?
                    <Col className='profile-preloader'> <Preloader/> </Col>
                    :

                    (wishlist.length > 0)
                        ? <Col xs={{span: 24}} sm={{span: 14, offset: 1}} md={{span: 14, offset: 1}}
                               lg={{span: 13, offset: 2}}
                               xl={{span: 15, offset: 1}}>
                            <div className='favouritesContainer'>
                                {wishlist.map(product => <ProductCard product={product} key={product._id}
                                                                      refresh={updateWishlist}/>)}
                            </div>
                        </Col>
                        :
                        <Col className='userProfileOrderFav-emptyContainer' xs={{span: 20, offset: 2}}
                             sm={{span: 8, offset: 4}}>
                            <Title>My favourites</Title>
                            <StarTwoTone twoToneColor='#fadb14' className='userProfileOrderFav-icon'/>
                            <Title level={3}>You haven't products in your favourite list yet.</Title>
                        </Col>
            }
        </>
    )
}

export default UserFavourites;