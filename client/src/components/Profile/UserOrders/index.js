import React, {useEffect, useState} from "react";
import {Col, Collapse, Divider, Row, Typography} from 'antd';
import {ShoppingTwoTone} from '@ant-design/icons';
import Ajax from "../../../services/Ajax";
import ProductsInOrder from "./ProductsInOrder";
import Preloader from "../../Preloader";
import '../style.less'

const {get} = Ajax;
const {Panel} = Collapse;
const {Title} = Typography;

const UserOrders = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const dateFormat = require("dateformat");

    const callback = (key) => {
        console.log(key);
    }

    useEffect(() => {
            let cleanupFunction = false;
            get('/orders')
                .then(orders => {
                    if (!cleanupFunction) {
                        setLoading(false)
                        if (orders !== null) {
                            console.log('orders ==>>', orders)
                            setOrders(orders || [])
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
                    <Col className='profile-preloader'> <Preloader/></Col>
                    :
                    (orders.length > 0)
                        ?
                        <Col xs={{span: 24}} sm={{span: 12, offset: 2}}>
                            <div className='ordersContainer'>
                                <Collapse onChange={callback}>
                                    {orders.map(order =>
                                        <Panel key={order._id}
                                               className='userProfileOrder'
                                               header={
                                                   <>
                                                       <div>Order# {order.orderNo} from {dateFormat(order.date, 'dd/mm/yyyy')}</div>
                                                   </>
                                               }>

                                         <ProductsInOrder products={order.products}/>
                                            <Row>
                                                <Col span={12}>
                                                    <Divider orientation="left">Delivery information</Divider>
                                                    <Row>
                                                        <Col>
                                                            <Row> {order.deliveryAddress.fullName}</Row>
                                                            <Row> {order.deliveryAddress.zip}</Row>
                                                            <Row> {order.deliveryAddress.city}</Row>
                                                            <Row> {order.deliveryAddress.address}</Row>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={10} offset={2}>
                                                    <Divider orientation="left">Total</Divider>
                                                    <Row>
                                                        <Col span={6} offset={1}>Shipping:</Col>
                                                        <Col>{order.shipping.id.price ? `${order.shipping.id.price}$` : "free shipping"}</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col span={6} offset={1}>Total:</Col>
                                                        <Col> {(order.shipping.id.price || 0) + order.totalSum}</Col>
                                                    </Row>
                                                </Col>
                                            </Row>

                                        </Panel>
                                    )}
                                </Collapse>
                            </div>
                        </Col>
                        :
                        <Col className='userProfileOrderFav-emptyContainer' xs={{span: 20, offset: 2}}
                             sm={{span: 8, offset: 2}} xl={{span: 6, offset: 2}}>
                            <Title>My orders</Title>
                            <ShoppingTwoTone twoToneColor='#fadb14' className='userProfileOrderFav-icon'/>
                            <Title level={3}>You haven't placed any orders in our store yet.</Title>
                        </Col>
            }
        </>
    )
}

export default UserOrders;