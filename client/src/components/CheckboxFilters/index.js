import React, {useState, useEffect} from 'react';
import './styles.less';
import CheckboxItem from "./CheckboxItem";
import Ajax from "../../services/Ajax";
import {useSelector, useDispatch} from "react-redux";
import {checkboxFilterAdd, checkboxFilterDelete} from "../../store/checkboxFilters/checkboxFiltersAction";

const CheckboxFilter = (props) => {

    const [filters, setFilters] = useState([]);
    const filtersRedux = useSelector(state => state.filters.filters);
    const dispatch = useDispatch();
    console.log('redux--->>', filtersRedux);

    useEffect(() => {
        async function fetch() {
            const {data} = await Ajax.get('/filters');
            setFilters(data);
        }
        fetch()
    }, []);

    const trans  = [...filters].map(item =>{
        return {
            type: item.type,
            name: item.name,
            id: item._id
        }
    });
    console.log('----->>', trans);

    const catchCheckbox = (e) => {
        const clicked = e.target;
        const index = filtersRedux.findIndex(item => item.name === clicked.name);
        if (clicked.type === 'checkbox') {
            const el = {type:clicked.dataset.type, name:clicked.name};
            if (index < 0) {
                dispatch(checkboxFilterAdd(el));
                console.log('before this checkbox arr', filtersRedux);
            } else {
                dispatch(checkboxFilterDelete(el));
                console.log('after this checkbox arr', filtersRedux);
            }
        }
    }

    return (
        <div className='checkbox-container' onClick={catchCheckbox}>
            {
                trans.map(item =>
                    // <div className='checkbox-group__item'>
                        <CheckboxItem type={item.type} name={item.name} key={item.name}/>
                    // </div>
                )
            }
        </div>
    )
}
export default CheckboxFilter;