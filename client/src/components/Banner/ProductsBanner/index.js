import React from 'react';
import ProductCard from "../../ProductCard";
import './styles.less';
import {Col, Row} from "antd";

const ProductBanner = ({products}) => {

    return (
        <>
            <Row gutter={[20, 20]} justify="space-around">
                {products.map(product => {
                    return (
                        <Col span={12} key={product.itemNo}>
                            <ProductCard product={product}/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default ProductBanner;