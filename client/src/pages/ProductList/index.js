import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";
import {pickUpValues, groupValues} from "../../functions/checkboxFilters/filters";
import Ajax from "../../services/Ajax";
import FilteredProducts from "../../components/FilteredProducts";

const ProductList = () => {

    const queryString = require('query-string');
    const {query} = useParams();
    const history = useHistory();
    // const location = useLocation();

    const [checkboxFiltersDB, setCheckboxFiltersDB] = useState([]);
    const [checkboxFiltersClicked, setCheckboxFiltersClicked] = useState([]);
    const [minValue, setMinValue] = useState(150);
    const [maxValue, setMaxValue] = useState(700);
    const [showFilters, setShowFilters] = useState(false);
    const [parsedUrl, setParsedUrl] = useState({});

    const values = pickUpValues(checkboxFiltersClicked);
    const groupedValues = groupValues(values);
    const string = queryString.stringify({
        ...groupedValues, ...{
            minPrice: minValue,
            maxPrice: maxValue
        }
    }, {arrayFormat: "comma"});
    console.log('querystring--->>', string);

    useEffect(() => {
        async function fetch() {
            const result = await Ajax.get('/filters');
            setCheckboxFiltersDB(result);
        }

        fetch()
    }, []);

    // useEffect(() => {
    //     const parsedString = queryString.parse(query, {arrayFormat: 'comma'});
    //     console.log('parsedString-->', parsedString);
    //     setParsedUrl(parsedString);
    //     console.log('location-->', location);
    // }, []);
    useEffect(() => {
        const parsedString = queryString.parse(query, {arrayFormat: 'comma'});
        setParsedUrl(parsedString);
        setMinValue(parsedUrl.minPrice);
        setMaxValue(parsedUrl.maxPrice);
    }, [parsedUrl.minPrice, parsedUrl.maxPrice, query, queryString])

    const clickButton = () => {
        history.push(string);
    }
    const clickButtonParse = () => {
        const parsedString = queryString.parse(query, {arrayFormat: 'comma'});
        console.log('parsedString-->', parsedString);
        setParsedUrl(parsedString);
        // console.log('location-->', location);
    }

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
    const openFilters = () => {
        setShowFilters(!showFilters);
    }
    const show = showFilters ? 'active' : 'hidden';
    const showButton = {display: showFilters ? 'none' : 'inline-block'}

    return (
        <>
            <div className="product-list-container">
                <div className={"filters-container " + show}>
                    <PriceSlider minValue={minValue} maxValue={maxValue}
                                 setMinVal={setMinValue}
                                 setMaxVal={setMaxValue}/>
                    <button onClick={clickButton}>push</button>
                    <button onClick={clickButtonParse}>parse</button>
                    <CheckboxFilter parsedURL={parsedUrl} filters={checkboxFiltersDB} clickCheckbox={catchCheckbox}/>
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