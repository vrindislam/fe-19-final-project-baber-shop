import React, {useEffect, useState} from 'react';
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";
import {pickUpValues, groupValues} from "../../functions/checkboxFilters/filters";
import Ajax from "../../services/Ajax";
import FilteredProducts from "../../components/FilteredProducts";

const ProductList = () => {

    const [checkboxFiltersDB, setCheckboxFiltersDB] = useState([]);
    const [checkboxFiltersClicked, setCheckboxFiltersClicked] = useState([]);
    const [minValue, setMinValue] = useState(100);
    const [maxValue, setMaxValue] = useState(700);

    const queryString = require('query-string');
    const values = pickUpValues(checkboxFiltersClicked);
    const groupedValues = groupValues(values);
    const string = queryString.stringify({...groupedValues, ...{minPrice: minValue, maxPrice: maxValue}}, {arrayFormat: "comma"});

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
            <div className="product-list-container" style={{display:"flex"}}>
                <div className="filters-container" style={{display: "inline-block"}}>
                    <PriceSlider minValue={minValue} maxValue={maxValue} setMinVal={setMinValue} setMaxVal={setMaxValue}/>
                    <CheckboxFilter filters={checkboxFiltersDB} clickCheckbox={catchCheckbox}/>
                </div>
                <div>
                    <FilteredProducts queryString={string}/>
                </div>
            </div>
        </>
    )
}

export default ProductList;