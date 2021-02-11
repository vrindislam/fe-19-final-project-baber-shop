import React from 'react'
import {Button, Col, Layout, Row} from 'antd';
import {Link} from "react-router-dom";
import './style.less'
import UserInformation from '../../components/Profile/UserInformation'
const Profile = (props) => {



    return (
        <Layout className='profile'>
            <Row>
                <Col className='profile-btnContainer' xs={{offset: 3, span: 6}}>
                    <Row style={{border: `1px solid red`}}>
                        <Button type='primary'>Personal information</Button></Row>
                    <Row>
                        <Button type='primary' onClick={() => <Link to='/orders'/>}>Orders</Button>
                    </Row>
                    <Row><Button type='primary'>Favourites</Button></Row>
                    <Row><Button type='primary'>Change password</Button></Row>
                    <Row><Button type='primary'>Log out</Button></Row>

                </Col>
                <UserInformation/>
            </Row>
        </Layout>
    )
}

export default Profile;