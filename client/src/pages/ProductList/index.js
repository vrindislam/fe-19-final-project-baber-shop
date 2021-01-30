import React from 'react';
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";

const ProductList = () => {

    return (
        <>
            <h2>Here should be all products</h2>
            <div className="filters-container">
                <PriceSlider/>
                <CheckboxFilter/>
            </div>
        </>
    )
}

export default ProductList;