import React from 'react';
import './styles.less';
import CheckboxFilter from "../../components/CheckboxFilters";
import PriceSlider from "../../components/PriceSlider";
// import Ajax from "../../services/Ajax";
import {useSelector} from "react-redux";

const ProductList = () => {

    // const queryString = require('query-string');
    // const priceFilterRedux = useSelector(state => state.priceFilter.price);
    const checkboxRedux = useSelector(state => state.checkboxFilters.filters);
    const map = checkboxRedux.map(item => {
        return {
            [item.type]: item.name
        }
    })

    console.log('from redux->>', map);

    // const string = queryString.stringify(priceFilterRedux, {arrayFormat: "comma"});
    // const string2 = queryString.stringify(checkboxRedux, {arrayFormat: "comma"});
    // console.log('string2-->>', queryString.stringify(map, {arrayFormat: "comma"}));
    // useEffect(() => {
    //     async function fetch() {
    //         const data = await Ajax.get(`/products/filter/${string2}`);
    //         console.log('this is from string query', data);
    //     }
    //
    //     fetch()
    // }, [])

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