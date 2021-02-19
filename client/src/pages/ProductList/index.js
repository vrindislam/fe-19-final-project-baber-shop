import React, {useEffect, useState} from 'react';
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";
import {pickUpValues, groupValues} from "../../functions/checkboxFilters/filters";
import Ajax from "../../services/Ajax";
import FilteredProducts from "../../components/FilteredProducts";
import {useDispatch, useSelector} from "react-redux";
import {addFilter, deleteFilter} from "../../store/filters/filterAction";

import {MetaForPages} from "../../components/Helmet"

const ProductList = () => {

    const queryString = require('query-string');
    const dispatch = useDispatch();
    const filtersRedux = useSelector(state => state.filterReducer.filters);

    const [checkboxFiltersDB, setCheckboxFiltersDB] = useState([]);
    const [minValue, setMinValue] = useState(150);
    const [maxValue, setMaxValue] = useState(700);
    const [showFilters, setShowFilters] = useState(false);

    const values = pickUpValues(filtersRedux);
    const groupedValues = groupValues(values);
    const string = queryString.stringify({
        ...groupedValues, ...{
            minPrice: minValue,
            maxPrice: maxValue
        }
    }, {arrayFormat: "comma"});

    useEffect(() => {
        async function fetch() {
            const result = await Ajax.get('/filters');
            setCheckboxFiltersDB(result);
        }
        fetch()
    }, []);

    const catchCheckbox = (e) => {
        if (e.target.type === 'checkbox') {
            const index = filtersRedux.findIndex(item => item.name === e.target.name);
            const el = {type: e.target.dataset.type, name: e.target.name};
            if (index < 0) {
                dispatch(addFilter(el));
            } else {
                dispatch(deleteFilter(el));
            }
        }
    }
    const openFilters = () => {
        setShowFilters(!showFilters);
    }
    const show = showFilters ? 'active' : 'hidden';

    const showButton = {display: showFilters ? 'none' : 'inline-block'}


    return (
        <>
            <MetaForPages
              title = "Barber Shop Market"
              content = "Barber Shop market"
              rel = "icon"
            />
            <div className="product-list-container">
                <div className={"filters-container " + show}>
                    <PriceSlider minValue={minValue} maxValue={maxValue}
                                 setMinVal={setMinValue}
                                 setMaxVal={setMaxValue}
                    />
                    <CheckboxFilter filters={checkboxFiltersDB} clickCheckbox={catchCheckbox}/>
                </div>
                <div className="open-filters-btn-container">
                    <button type='button' className='open-filters-btn' style={showButton} onClick={openFilters}>X
                    </button>
                    <button type='button' className={'open-filters-btn ' + show} onClick={openFilters}>O</button>
                </div>
                <FilteredProducts queryString={string}/>
            </div>
        </>
    )
}

export default ProductList;