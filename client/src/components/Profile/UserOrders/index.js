import React from "react";
import {ShoppingTwoTone} from '@ant-design/icons';
import {Col, Typography} from 'antd';
import '../style.less'

const {Title} = Typography;

const UserOrders = () => {


    return (
        <Col className='userProfileOrderFav-emptyContainer' xs={{span: 20, offset: 2}} sm={{span: 8, offset: 2}}
             md={{span: 8, offset: 2}} xl={{span: 6, offset: 2}} >
            <Title>My orders</Title>
            <ShoppingTwoTone twoToneColor='#fadb14' className='userProfileOrderFav-icon'/>
            <Title level={3}>You haven't placed any orders in our store yet.</Title>
        </Col>
    )
}
export default UserOrders;