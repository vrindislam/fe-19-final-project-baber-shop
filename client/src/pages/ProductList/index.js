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
    const [showFilters, setShowFilters] = useState(false);
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

    const openFilters = () =>{
        setShowFilters(!showFilters);
    }

    const show = showFilters ? 'active' : 'hidden';
    const showButton = {display: showFilters? 'none' : 'inline-block'}



    return (
        <>
            <div className="product-list-container">
                <div className={"filters-container " + show} >
                    <PriceSlider minValue={minValue} maxValue={maxValue} setMinVal={setMinValue} setMaxVal={setMaxValue}/>
                    <CheckboxFilter filters={checkboxFiltersDB} clickCheckbox={catchCheckbox}/>
                </div>
                <div className="open-filters-btn-container">
                    <button type='button' className='open-filters-btn' style={showButton} onClick={openFilters}>X</button>
                    <button type='button' className={'open-filters-btn ' + show} onClick={openFilters}>O</button>
                </div>
                    <FilteredProducts queryString={string}/>
            </div>
        </>
    )
}

export default ProductList;