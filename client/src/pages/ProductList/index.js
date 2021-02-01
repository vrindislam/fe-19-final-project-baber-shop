import React, {useEffect, useState} from 'react';
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";
import {useSelector} from "react-redux";
import {pickUpValues, groupValues} from "../../functions/checkboxFilters/filters";
import Ajax from "../../services/Ajax";

const ProductList = () => {

    const filtersRedux = useSelector(state => state.checkboxFilters.filters);
    const queryString = require('query-string');
    const priceFilterRedux = useSelector(state => state.priceFilter.price);
    const [filtered,setFiltered] = useState([]);
    const values = pickUpValues(filtersRedux);
    const groupedValues = groupValues(values);
    const string = queryString.stringify({...groupedValues, ...priceFilterRedux}, {arrayFormat: "comma"});

    useEffect(()=>{
        async function fetch(){
            const {products} = await Ajax.get(`/products/filter?${string}`);
            setFiltered(products);
        }
        fetch()
    }, [string])

    console.log('from server--->>', filtered);

    return (
        <>
            <div className="filters-container">
                <PriceSlider/>
                <CheckboxFilter/>
            </div>
        </>
    )
}

export default ProductList;