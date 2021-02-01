import React, {useState, useEffect} from 'react';
import './styles.less';
import CheckboxItem from "./CheckboxItem";
import {useSelector, useDispatch} from "react-redux";
import {checkboxFilterAdd, checkboxFilterDelete} from "../../store/checkboxFilters/checkboxFiltersAction";
import Ajax from "../../services/Ajax";

const CheckboxFilter = () => {

    const [filtersFromDB, setFiltersFromDB] = useState([]);
    const filtersRedux = useSelector(state => state.checkboxFilters.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetch() {
            const result = await Ajax.get('/filters');
            setFiltersFromDB(result);
        }

        fetch()
    }, []);

    const allTypes = filtersFromDB.map(item => {
        return item.type
    })
    const uniqTypes = Array.from(new Set(allTypes));

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
            {
                uniqTypes.map(item =>
                    <div key={item} className='checkbox-group'>
                        <p className='checkbox-group__name'>{item}</p>
                        <CheckboxItem type={item}/>
                    </div>
                )
            }
        </div>
    )
}

export default CheckboxFilter;