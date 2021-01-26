import React, {useState, useEffect} from 'react';
import './styles.less';
import CheckboxItem from "./CheckboxItem";
import Ajax from "../../services/Ajax";
import {useSelector} from "react-redux";
// import axios from "axios";

const CheckboxFilter = (props) => {

    const [checkboxArr, setCheckbox] = useState([]);
    const [filters, setFilters] = useState([]);
    const filtersRedux = useSelector(state => state.filters.filter);
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
        console.log('clicked', clicked);
        const index = checkboxArr.findIndex(item => item.name === clicked.name);
        const clonedArr = [...checkboxArr];
        if (clicked.type === 'checkbox') {
            console.log(clicked.name, 'was clicked');
            if (index < 0) {
                clonedArr.push({name:clicked.name, type:clicked.dataset.type});
                setCheckbox(clonedArr);
                console.log('before this checkbox arr', clonedArr);
            } else {
                const filtered = clonedArr.filter(item => item.name !== clicked.name);
                setCheckbox(filtered);
                console.log('after this checkbox arr', filtered);
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