import React from 'react';
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";
import {useSelector} from "react-redux";
import {pickUpValues, groupValues} from "../../functions/checkboxFilters/filters";

const ProductList = () => {

    const filtersRedux = useSelector(state => state.checkboxFilters.filters);
    const queryString = require('query-string');
    const priceFilterRedux = useSelector(state => state.priceFilter.price);
    const values = pickUpValues(filtersRedux);
    const groupedValues = groupValues(values);
    const string = queryString.stringify({...groupedValues, ...priceFilterRedux}, {arrayFormat: "comma"});

    console.log('query string---->>', string);
    console.log('---->>>res', groupedValues)

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