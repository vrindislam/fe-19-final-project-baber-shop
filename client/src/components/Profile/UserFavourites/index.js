import React from "react";
import {StarTwoTone} from '@ant-design/icons';
import {Col, Typography} from 'antd';
import '../style.less'

const { Title } = Typography;

const UserFavourites = () => {


    return (
        <Col className='userProfileOrderFav-emptyContainer' xs={{span: 20, offset: 2}} sm={{span: 8, offset: 2}}  md={{span: 8, offset: 2}} xl={{span: 6, offset: 2}}>
            <Title>My favourites</Title>
            <StarTwoTone twoToneColor='#fadb14' className='userProfileOrderFav-icon'/>
            <Title level={3}>You haven't products in your favourite list yet.</Title>
        </Col>


    )
}
export default UserFavourites;