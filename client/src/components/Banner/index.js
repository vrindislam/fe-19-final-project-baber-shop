import React, {useEffect, useState} from "react";
import CategoryBanner from "./CategoryBanner";
import ProductBanner from "./ProductsBanner";
import {Col, Row} from "antd";
import "./styles.less";
import CategoryService from "../../services/CategoryService";
import ProductService from "../../services/ProductService";

const Banner = ({title, config}) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        switch (config) {
            case 'cp': {
                CategoryService.getRandomCategories(1)
                    .then(cats => {
                        console.log(111, cats)
                        setCategories(cats || [])
                    });
                break;
            }
            case 'cc': {
                CategoryService.getRandomCategories(2)
                    .then(cats => setCategories(cats || []));
                break;
            }
            default: {
                //
            }
        }
    }, [config]);

    useEffect(() => {
        if (config === 'cp' && categories && categories.length > 0) {
            ProductService.getProductsForBanner() // categories[0]
                .then(products => setProducts(products || []));
        }
    }, [config, categories]);

    return (
        <div className="banners">
            <p className="banners-title">
                {title}
            </p>
            <div className="banners-wrapper">
                <Row justify="space-around" gutter={[20, 20]}>
                    {categories.map(cat => {
                        return (
                            <Col xxl={12} xl={24} lg={24} md={24} sm={24} key={cat.id}>
                                <CategoryBanner category={cat} />
                            </Col>
                        )
                    })}
                    <Col xxl={12} xl={12} lg={24} md={24} sm={24}>
                        <ProductBanner products={products}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Banner;