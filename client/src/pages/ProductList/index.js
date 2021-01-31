import React, {useEffect, useState} from 'react';
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";
import {useSelector} from "react-redux";
import {pickUpValues, groupValues} from "../../functions/checkboxFilters/filters";
// import Ajax from "../../services/Ajax";
import axios from "axios";

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
            // const data = await Ajax.get(`/products/filter?${string}`);
            const {data} = await axios.get(`${process.env.REACT_APP_API}/products/filter?${string}`);
            setFiltered(data.products);
        }
        fetch()
    }, [string])
    console.log('query string---->>', `http://localhost:5000/api/products/filter?${string}`);
    console.log('from server--->>', filtered);

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