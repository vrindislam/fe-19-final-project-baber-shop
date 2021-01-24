import React from "react";
import {Col, Input, Layout, Row} from 'antd';
import Ajax from "../../services/Ajax";
import './styles.less'
import {Link} from "react-router-dom";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from '@ant-design/icons';

const {Search} = Input;

const {get} = Ajax;
const {Footer: AntFooter} = Layout;

// Footer: The bottom layout with the default style,
// in which any element can be nested, and must be placed in Layout.


function Footer() {
    //
    // const newLinks = [
    //     {
    //         title: "About us",
    //         links: [
    //             {
    //                 description: "Store",
    //                 url: "/about-us/store"
    //             },
    //             {
    //                 description: "News",
    //                 url: "/about-us/news"
    //             },
    //             {
    //                 description: "Special offers",
    //                 url: "/about-us/special-offers"
    //             }, {
    //                 description: "Policy",
    //                 url: "/about-us/Policy"
    //             }]
    //     },
    //     {
    //         title: "Contacts",
    //         links: [
    //             {
    //                 description: "Map of stores",
    //                 url: "/contacts/map-of-stores"
    //             },
    //             {
    //                 description: "Call us",
    //                 url: "/contacts/call-us"
    //             }]
    //     },
    //     {
    //         title: "Items",
    //         links: [
    //             {
    //                 description: "Payment",
    //                 url: "/items/payment"
    //             },
    //             {
    //                 description: "Shipment",
    //                 url: "/items/shipment"
    //             },
    //             {
    //                 description: "Find your parcel",
    //                 url: "/items/find-your-parcel"
    //             }]
    //     }]
    get('/links');

    return (

        <AntFooter className='footer'>
            <Row gutter={{md: 8, lg: 8}}>
                <Col className="gutter-row" span={4}>
                    <div className='footerLink'>
                        <Link to="/home">
                            <img src="footerLogo/logo_white.png" alt="logo-white"/>
                            <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="131" height="53"
                                 viewBox="0, 0, 400,161.83206106870227">
                                <g id="svgg">
                                    <path id="path0"
                                          d="M232.329 7.987 C 224.898 17.434,220.336 31.911,217.525 54.962 C 215.627 70.532,215.359 70.980,213.846 61.103 C 211.821 47.888,203.882 45.577,193.621 55.218 L 186.260 62.133 186.260 55.282 C 186.260 39.584,172.809 48.870,169.341 66.963 C 165.004 89.589,157.098 92.504,159.702 70.517 C 163.417 39.147,123.209 43.611,117.277 75.227 C 113.661 94.507,133.128 112.040,142.076 97.562 C 143.335 95.525,145.345 95.409,147.600 97.244 C 156.272 104.298,183.147 100.559,185.185 92.014 C 189.207 75.155,192.320 71.857,197.387 79.091 C 200.063 82.912,205.206 85.496,210.136 85.496 C 215.777 85.496,219.356 87.677,221.413 92.366 C 226.828 104.709,251.114 103.092,257.083 89.992 C 260.795 81.843,265.649 79.893,265.649 86.550 C 265.649 96.486,276.101 100.602,300.095 100.112 L 323.563 99.634 327.068 88.748 C 332.157 72.942,332.732 72.492,338.593 79.730 C 344.000 86.407,357.252 83.920,357.252 76.228 C 357.252 70.360,366.674 73.453,369.203 80.153 C 378.492 104.752,323.139 125.443,262.393 120.077 L 232.056 117.398 219.415 127.401 C 204.132 139.496,206.980 139.517,190.840 127.193 C 177.776 117.218,176.568 116.933,138.801 114.914 C 92.294 112.428,54.434 107.141,56.714 103.452 C 57.628 101.973,64.134 100.761,71.173 100.759 C 98.818 100.748,118.982 80.891,109.003 63.503 C 106.307 58.805,105.411 54.962,107.012 54.962 C 131.480 54.962,125.424 15.885,99.863 8.833 C 12.265 -15.333,-40.272 99.302,40.358 138.669 C 79.954 158.002,87.751 159.030,206.575 160.594 C 366.309 162.697,400.000 153.623,400.000 108.500 C 400.000 78.521,385.703 58.015,364.800 58.015 C 358.774 58.015,354.159 56.210,353.094 53.435 C 350.576 46.871,341.988 47.787,333.785 55.494 L 326.718 62.133 326.718 55.494 C 326.718 44.808,315.752 46.989,311.749 58.471 C 309.905 63.760,308.397 70.552,308.397 73.565 C 308.397 80.172,297.195 88.596,288.634 88.427 C 283.323 88.322,283.625 87.663,290.763 83.790 C 304.879 76.130,309.325 62.433,300.545 53.653 C 293.033 46.141,281.271 47.829,272.005 57.749 L 263.697 66.642 256.028 56.985 L 248.360 47.328 253.871 35.115 C 266.650 6.792,249.880 -14.326,232.329 7.987 M245.630 22.137 C 241.600 35.260,235.611 47.302,235.381 42.748 C 234.963 34.508,241.435 15.267,244.624 15.267 C 246.445 15.267,246.863 18.123,245.630 22.137 M97.911 24.535 C 110.935 31.505,103.055 44.823,84.085 47.901 C 71.179 49.995,69.196 61.796,81.458 63.542 C 102.495 66.538,92.812 85.496,70.245 85.496 L 58.725 85.496 62.705 64.606 C 64.894 53.117,67.139 41.094,67.694 37.889 C 68.445 33.547,66.661 31.824,60.695 31.133 C 50.968 30.005,50.151 31.842,44.306 67.979 C 39.016 100.685,38.286 101.751,28.748 90.669 C 1.200 58.663,58.787 3.597,97.911 24.535 M143.427 72.129 C 140.359 85.733,135.338 91.620,132.689 84.719 C 130.238 78.330,139.207 61.779,145.480 61.115 C 145.723 61.090,144.799 66.046,143.427 72.129 M287.417 71.056 C 282.334 76.140,279.455 71.089,284.186 65.388 C 287.048 61.940,288.703 61.528,289.545 64.054 C 290.215 66.065,289.258 69.216,287.417 71.056 M241.221 70.049 C 241.221 73.308,242.662 76.866,244.423 77.954 C 247.836 80.064,242.691 88.550,238.000 88.550 C 234.190 88.550,231.421 77.055,233.588 70.229 C 236.067 62.416,241.221 62.295,241.221 70.049 "
                                          stroke="none" fill="#fff"> </path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </Col>
                <Col className="footerNav" span={4}>
                    <Link className='footerLink footerMainLink' to="/home">
                        About Us
                    </Link>
                    <Link className='footerLink' to="/home">
                        Store
                    </Link>
                    <Link className='footerLink' to="/home">
                        News
                    </Link>
                    <Link className='footerLink' to="/home">
                        Special offers
                    </Link>
                    <Link className='footerLink' to="/home">
                        Policy
                    </Link>
                </Col>
                <Col className="footerNav" span={4}>
                    <Link className='footerLink footerMainLink' to="/home">
                        About Us
                    </Link>
                    <Link className='footerLink' to="/home">
                        Store
                    </Link>
                    <Link className='footerLink' to="/home">
                        News
                    </Link>
                </Col>
                <Col className="footerNav" span={4}>
                    <Link className='footerLink footerMainLink' to="/home">
                        About Us
                    </Link>
                    <Link className='footerLink' to="/home">
                        Store
                    </Link>
                    <Link className='footerLink' to="/home">
                        News
                    </Link>
                    <Link className='footerLink' to="/home">
                        Store
                    </Link>
                </Col>
                <Col className="gutter-row footerLink" span={8}>
                    <Search
                        placeholder='Enter your email'
                        prefix={<MailOutlined/>}
                        allowClear
                        enterButton="Subscribe"
                        size="small"
                        color='yellow'
                        onSearch={() => alert('Success')}
                    />
                    <Link className='footerLink' to="/home">
                        <InstagramOutlined className='footerSocialIcons'/>
                    </Link>
                    <Link className='footerLink' to="/home">
                        <FacebookOutlined className='footerSocialIcons'/>
                    </Link>
                    <Link className='footerLink' to="/home">
                        <YoutubeOutlined className='footerSocialIcons'/>
                    </Link>
                </Col>
            </Row>
        </AntFooter>
    )
}

export default Footer;