import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Layout, Menu} from "antd";
import {authUser} from "../../store/user/userAction";
import "./styles.less";
import {Link} from "react-router-dom";
import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import PopoverBasket from "../PopoverBasket/index";
import LiveSearch from './LiveSearch'
import {showModal} from "../../store/modal/modalAction";
import Login from "../Modal/LoginModal";

const {Header} = Layout;
const {Item} = Menu;

function SiteHeader() {
    const dispatch = useDispatch()

    const showModalLogin = () => {
        dispatch(showModal({status: true, type: "LoginForm"}));
    };

    const {isAuthenticated} = useSelector((state => ({...state.user})))
    const handleLogout = () => {
        if (!isAuthenticated) return
        dispatch(authUser(false))
        localStorage.removeItem('token');
    }

    return (
        <Header style={{position: "fixed", zIndex: 1, width: "100%", height: 119}}>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>

                <Item key="home" icon={<AppstoreOutlined/>}>
                    <Link to="/">Home</Link>
                </Item>

                <Item key="plp" icon={<ShoppingOutlined/>}>
                    <Link to="/shop">Shop</Link>
                </Item>

                <Item key="register" icon={<UserAddOutlined/>}>
                    <Link to="/register">Register</Link>
                </Item>

                <Item key="login" icon={<UserOutlined/>} onClick={showModalLogin}>
                    Login
                </Item>
                <Login />

                <Item key="pdp">
                    <Link to="/product-details">Product Details</Link>
                </Item>

                <Item key="admin-category" icon={<SettingOutlined/>}>
                    <Link to="/admin/category">Admin add category</Link>
                </Item>

                <Item key="cart" icon={<ShoppingCartOutlined className='basket-icon'/>}>
                    <PopoverBasket/>
                </Item>

                {isAuthenticated &&
                <Item key="logout" icon={<LogoutOutlined/>} onClick={handleLogout}>
                    Logout
                </Item>}


            </Menu>
            <LiveSearch/>
        </Header>
    );
}

export default SiteHeader;
