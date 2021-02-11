import React from 'react'
import {Button, Col, Row} from 'antd';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import './style.less'
import ChangePassword from "../../components/Profile/ChangePassword";
import UserInformation from "../../components/Profile/UserInformation";
import UserFavourites from "../../components/Profile/UserFavourites";
import UserOrders from "../../components/Profile/UserOrders";

const Profile = (props) => {


    return (
        <Router>
            <div className='profile'>
                <Row>
                    <Col className='profile-btnContainer' xs={{span: 20, offset: 2}} sm={{span: 8, offset: 2}}
                         md={{span: 6, offset: 2}} xl={{span: 6, offset: 3}}>
                        <Row>
                            <NavLink exact to="/profile" activeClassName="selected">
                                <Button type='primary'>Personal information</Button>
                            </NavLink>
                        </Row>

                        <Row>
                            <NavLink exact to="/profile/orders" activeClassName="selected">
                                <Button type='primary'>Orders</Button>
                            </NavLink>
                        </Row>

                        <Row>
                            <NavLink exact to="/profile/favourites" activeClassName="selected">
                                <Button type='primary'>Favourites</Button>
                            </NavLink>
                        </Row>

                        <Row>
                            <NavLink to="/profile/change-password" activeClassName="selected">
                                <Button type='primary'>Change password</Button>
                            </NavLink>
                        </Row>
                    </Col>
                    <Switch>
                        <Route exact path={'/profile'} component={UserInformation}/>
                        <Route exact path={'/profile/orders'} component={UserOrders}/>
                        <Route exact path={'/profile/favourites'} component={UserFavourites}/>
                        <Route exact path={'/profile/change-password'} component={ChangePassword}/>
                    </Switch>
                </Row>
            </div>
        </Router>
    )
}

export default Profile;