import React, {useEffect, useState} from "react";
import {Col, Image, Input, Layout, Row} from 'antd';
import Ajax from "../../services/Ajax";
import './styles.less'
import {Link} from "react-router-dom";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from '@ant-design/icons';

const {Search} = Input;

const {get} = Ajax;
const {Footer: AntFooter} = Layout;

const Footer = () => {

    const [links, setLinks] = useState([]);
    useEffect(() => {
        get('/links')
            .then(links => setLinks(links || []))
    }, [])
    console.log('links', links);

    return (

        <AntFooter className='footer'>
            <Row justify='center' gutter={[5, 20]}>
                <Col xs={24} sm={24} lg={5}>
                    <div className='footer-logo'>
                        <Link to="/">
                            <Image src="/logo/footerLogo/logo_white.png" alt="logo-white" preview={false}/>
                        </Link>
                    </div>
                </Col>


                {links.map(mainLink => {
                    return (
                        <Col key={mainLink._id} className="footer-nav" xs={24} sm={8} lg={4}>
                            <Link className='footer-header_link' to={`/pages${mainLink.url}`}>
                                {mainLink.title}
                            </Link>
                            {
                                mainLink.links.map(link => {
                                    return (
                                        <Link className='footer-link' key={link._id} to={`/pages${link.url}`}>
                                            {link.description}
                                        </Link>)
                                })
                            }
                        </Col>
                    )
                })
                }

                <Col className="footer-socials" xs={24} sm={18} lg={7}>
                    <Search
                        className='footer-socials_subscribePanel'
                        placeholder='Enter your email'
                        prefix={<MailOutlined/>}
                        allowClear
                        enterButton="Subscribe"
                        size="small"
                        color='yellow'
                        onSearch={() => alert('Success')}
                    />
                    <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                        <InstagramOutlined className='footer-socials_icons'/>
                    </a>
                    <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>
                        <FacebookOutlined className='footer-socials_icons'/>
                    </a>
                    <a href="https://www.youtube.com/" target='_blank' rel='noopener noreferrer'>
                        <YoutubeOutlined className='footer-socials_icons'/>
                    </a>
                </Col>
            </Row>
            <Row justify='center'>
                <Col className='footer-copyright'>Copyright © Barber All Rights Reserved 2021</Col>
            </Row>
        </AntFooter>
    )
}

export default Footer;