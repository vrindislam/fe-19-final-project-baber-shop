import React, {useState, useEffect} from 'react';
import './styles.less';
import CheckboxItem from "./CheckboxItem";
import Ajax from "../../services/Ajax";
import {useSelector, useDispatch} from "react-redux";
import {checkboxFilterAdd, checkboxFilterDelete} from "../../store/checkboxFilters/checkboxFiltersAction";

const CheckboxFilter = () => {

    const [filtersFromDB, setFiltersFromDB] = useState([]);
    const filtersRedux = useSelector(state => state.checkboxFilters.filters);
    const dispatch = useDispatch();
    console.log('from redux--->>', filtersRedux);

    useEffect(() => {
        async function fetch() {
            const {data} = await Ajax.get('/filters');
            setFiltersFromDB(data);
        }

        fetch()
    }, []);

    const types = filtersFromDB.map(item => {
        return item.type
    })
    const uniq = Array.from(new Set(types));

    console.log('filters ----->>', uniq);

    const catchCheckbox = (e) => {
        if (e.target.type === 'checkbox') {
            const index = filtersRedux.findIndex(item => item.name === e.target.name);
            const el = {type: e.target.dataset.type, name: e.target.name};
            if (index < 0) {
                dispatch(checkboxFilterAdd(el));
            } else {
                dispatch(checkboxFilterDelete(el));
            }
        }
    }

    return (
        <div className='checkbox-container' onClick={catchCheckbox}>
            <p>There are {filtersFromDB.length} filters</p>
            {
                uniq.map(item =>
                    <div className='checkbox-group__item'>
                        <p>{item}</p>
                        <CheckboxItem types={item}/>
                    </div>
                )
            }
        </div>
    )
}

export default CheckboxFilter;