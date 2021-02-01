import React, {useEffect, useState} from 'react';
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";
import {pickUpValues, groupValues} from "../../functions/checkboxFilters/filters";
import Ajax from "../../services/Ajax";

const ProductList = () => {

    const [checkboxFiltersDB, setCheckboxFiltersDB] = useState([]);
    const [checkboxFiltersClicked, setCheckboxFiltersClicked] = useState([]);
    const [minValue, setMinValue] = useState(100);
    const [maxValue, setMaxValue] = useState(700);
    const [filteredProducts,setFilteredProducts] = useState([]);
    console.log('filtered-->', filteredProducts)

    const queryString = require('query-string');
    const values = pickUpValues(checkboxFiltersClicked);
    const groupedValues = groupValues(values);
    const string = queryString.stringify({...groupedValues, ...{minPrice: minValue, maxPrice: maxValue}}, {arrayFormat: "comma"});
    console.log('string---->', string);

    useEffect(()=>{
        async function fetch(){
            const {products} = await Ajax.get(`/products/filter?${string}`);
            console.log('filtered from server--->>', products);
            setFilteredProducts(products);
        }
        fetch()
    }, [string])

    useEffect(() => {
        async function fetch() {
            const result = await Ajax.get('/filters');
            setCheckboxFiltersDB(result);
        }
        fetch()
    }, []);

    const catchCheckbox = (e) => {
        if (e.target.type === 'checkbox') {
            const clonedCheckboxFilters = [...checkboxFiltersClicked]
            const index = checkboxFiltersClicked.findIndex(item => item.name === e.target.name);
            const el = {type: e.target.dataset.type, name: e.target.name};
            if (index < 0) {
                clonedCheckboxFilters.push(el);
                setCheckboxFiltersClicked(clonedCheckboxFilters);
            } else {
                const filtered = clonedCheckboxFilters.filter(item => item.name !== el.name);
                setCheckboxFiltersClicked(filtered);
            }
        }
    }

    return (
        <>
            <div className="filters-container">
                <PriceSlider minValue={minValue} maxValue={maxValue} setMinVal={setMinValue} setMaxVal={setMaxValue}/>
                <CheckboxFilter filters={checkboxFiltersDB} clickCheckbox={catchCheckbox}/>
            </div>
        </>
    )
}

export default ProductList;