import React, {useState, useEffect} from 'react';
import './styles.less';
import CheckboxItem from "./CheckboxItem";
import Ajax from "../../services/Ajax";
// import axios from "axios";

const CheckboxFilter = (props) => {

    const [checkboxArr, setCheckbox] = useState([]);
    const [filters, setFilters] = useState([]);
    // const [checkedBox, setCheckboxes] = useState("");
    // const getFilteredProducts = async (query) => await axios.post(`${process.env.REACT_APP_API}/products/filter/`,query);

    // const findItem = (event) => {
    //     setCheckboxes(event.target.value)
    // }

    useEffect(() => {
        async function fetch() {
            const {data} = await Ajax.get('/filters');
            setFilters(data);
        }

        fetch()
    }, []);
    console.log('filters -->>', filters);

    const catchCheckbox = (e) => {
        const clicked = e.target;
        const index = checkboxArr.findIndex(item => item === clicked.name);
        const clonedArr = [...checkboxArr];
        if (clicked.type === 'checkbox') {
            console.log(clicked.name, 'was clicked');
            if (index < 0) {
                clonedArr.push(clicked.name);
                setCheckbox(clonedArr);
                console.log('this checkbox arr', clonedArr);
            } else {
                const filtered = clonedArr.filter(item => item !== clicked.name);
                setCheckbox(filtered);
                console.log('this checkbox arr', filtered);
            }
        }
    }

    return (
        <div className='checkbox-container' onClick={catchCheckbox}>
            {
                filters.map(item =>
                    <CheckboxItem name={item.name} key={item.name}/>
                )
            }
        </div>
    )
}
export default CheckboxFilter;