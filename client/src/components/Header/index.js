import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Col, PageHeader, Row}  from "antd";
import {authUser} from "../../store/user/userAction";
import "./styles.less";
import {Link} from "react-router-dom";
import PopoverBasket from "../PopoverBasket/index";
import LiveSearch from './LiveSearch'
import {showModal} from "../../store/modal/modalAction";
import Login from "../Modal/LoginModal";
import {headerLogo, iconContact, iconCatalogue, iconCart, iconLogin } from './img/index'
import { LogoutOutlined } from "@ant-design/icons";
import Catalogue from "../Catalogue";


const SiteHeader = () =>{
    const dispatch = useDispatch();
  const {isAuthenticated, firstName} = useSelector((state => ({...state.user})))

    const showModalLogin = () => {
        dispatch(showModal({status: true, type: "LoginForm"}));
    };

    const [visibleCatalogue, setVisibleCatalogue] = useState(false);
    const showHeaderCatalogue = () => {
        setVisibleCatalogue(!visibleCatalogue);
    }

    const handleLogout = () => {
        if (!isAuthenticated) return
        dispatch(authUser({isAuthenticated: false}))
        localStorage.removeItem('token');
    }

    return (
        <PageHeader style={{position: 'fixed', zIndex: 1, padding:0, margin:0, height:'auto',  width: "100%",  textAlign: "center" }} >
            <Row className="header-row" gutter={[24, 24]}>

                <Col style={{padding:2, marginTop:10}} xs={6} sm={8} lg={8} >
                    {!isAuthenticated ?(<><div className="login" key="login"  onClick={showModalLogin}>
                            <img src={iconLogin} alt="User-icon"/>
                            <span className="login-title">LogIn</span>
                        </div><Login/></>) : (<><img src={iconLogin} alt="User-icon"/><span className="username">{firstName}</span></> )
                    }
                </Col>

                <Col style={{padding:2}} xs={10} sm={8}  lg={8} >
                    <div className='header-logo'  key="home" >
                        <Link to="/">
                            <img style={{width:'150px'}} src={headerLogo} alt="Logo"/>
                        </Link>
                    </div >
                </Col>
                <Col style={{padding:2, marginTop:10}} xs={8} sm={8}  lg={8} >
                   <Row justify="center">
                       <Col>
                         <div className="header-contact"  key="contact" >
                                <a  href="tel:+79998887766">
                                <img style={{width:18}} src={iconContact} alt="icon-contact"/>
                                <span className="contact-number">+380(067)6167008</span>
                                </a>
                         </div >
                       </Col>

                       <Col style={{ marginLeft:20}}>
                             {isAuthenticated &&
                             <div className="logoutBtn"  key="logout"  onClick={handleLogout} >
                                {<LogoutOutlined/>} <span className="logout-title">LogOut</span>
                             </div>}
                       </Col>
                     </Row>
                </Col>
            </Row>

            <Row className="header-row"  gutter={[24, 24]}>

                <Col style={{padding:2}}  xs={{ span:12, order: 1 }} sm={{span:12, order: 1 }}  lg={{span:8, order: 1 }} >
                    <div className="catalogue-btn" key="plp" onClick={showHeaderCatalogue}>
                        <Link className="catalogue-btn-link">
                            <img className="catalogue-img" src={iconCatalogue} alt="icon"/>
                            Catalogue
                            <Catalogue visible={visibleCatalogue}/>
                        </Link>
                    </div>
                </Col>
                <Col style={{padding:2}} className="search-box"  xs={{span:20, order: 3 }} sm={{span:18, order: 3 }}  lg={{span:8, order: 2 }} >
                    <LiveSearch />
                </Col>
                <Col style={{padding:2}} xs={{span:12, order: 2 }} sm={{span:12, order: 2 }}  lg={{span:8, order: 3 }} >

                    <div className="cart" key="cart">
                        <img className="img-cart" src={iconCart} alt="icon"/>
                        <PopoverBasket/>
                    </div>
                </Col>
            </Row>
        </PageHeader>

    );
}

export default SiteHeader;

