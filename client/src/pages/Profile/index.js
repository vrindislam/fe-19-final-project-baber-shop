import React from 'react'
import {Button, Col, Row} from 'antd';
import {Link} from "react-router-dom";
import './style.less'
import UserInformation from '../../components/Profile/UserInformation'
const Profile = (props) => {



    return (
        <div className='profile'>
            <Row>
                <Col className='profile-btnContainer' xs={{span: 20, offset: 2}} sm={{span: 8, offset: 2}} md={{span: 6, offset: 2}} xl={{span: 6, offset: 3}}>
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
        </div>
    )
}

export default Profile;