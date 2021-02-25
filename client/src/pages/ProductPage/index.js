import React, {useState, useEffect} from 'react';
import './styles.less'
import {Col, Row} from 'antd'
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cart/actionCart";
import Banner from "../../components/Banner";
import ProductCarousel from "../../components/ProductCarousel";
import { useParams } from 'react-router-dom'
import Ajax from "../../services/Ajax";
import {CheckCircleOutlined} from '@ant-design/icons'


const ProductPage = () => {
    const dispatch = useDispatch();
    const { itemNo } = useParams()
    const [product, setProduct] = useState({})
    const [images, setImages] = useState([])

    useEffect(() => {
        async function fetch() {
            const {name, currentPrice, imageUrls, _id, quantity, description} = await Ajax.get(`/products/${itemNo}`)

            setProduct({name, currentPrice, _id, quantity, description, itemNo});
            setImages(imageUrls);
        }

        fetch();
    }, [itemNo])


    const onAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(product));
    }

    return (
        <div className="product-page">
            <div className="product_page__container">
                <Row>
                    <Col className="product_page__box" xs={{span: 24, order: 1}} sm={{order: 1}}
                         lg={{span: 12, order: 1}}>
                        <div className="product_title" >{product.name}</div>
                        <div className="img-slider">
                            <ProductCarousel imageUrls={images}/>
                        </div>
                    </Col>
                    <Col className="product_page__box-description" xs={{span: 24, order: 2}} sm={{order: 2}} lg={{span: 9, order: 1}}>
                        <Col>
                            <div className="product_page__available" >
                                { product.quantity === 0
                                    ? (<span className="sold-out">Sold out</span>)
                                    :  (<span className="product-available"><CheckCircleOutlined/> Available: {product.quantity}</span>)
                                }
                            </div>


                            <div className="product-code">Item No:{product.itemNo}</div>
                            <Row>
                                <Col>
                                    <div className="product_page__price">${product.currentPrice}</div>
                                </Col>
                                <Col className="btn-buy_box">
                                    { product.quantity === 0
                                        ? (<button className="btn-notAvailable">Not Available</button>)
                                        :  (<button className="btn-buy" onClick={onAddToCart}>Buy</button>)
                                    }

                                </Col>

                            </Row>
                            <div className="product_page__description"> {product.description}The shape of the mouth determines the
                                structure of the hairstyle after pruning. Common teeth mouth has flat mouth, V word
                                mouth and U word mouth. Flat mouth is a relatively early design, because the shears
                                open and close when the hair will slip away from the mouth of the teeth, so the
                                proportion of thinning is not standard. The V-shaped and U-shaped teeth have
                                grooves, which can fix the hair proportionally in the teeth.
                            </div>
                        </Col>

                    </Col>
                </Row>

            </div>

            <Banner title={'One more  thing'} config='cc'/>
        </div>
    )}


export default ProductPage;