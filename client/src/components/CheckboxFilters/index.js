import React, {useState} from 'react';
import './styles.less';
import CheckboxItem from "./CheckboxItem";

const CheckboxFilter = (props) => {

    const [checkboxArr, setCheckbox] = useState([]);

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
            <div className='checkbox-group'>
                <p className='checkbox-group__name'>Category</p>
                <CheckboxItem name='razor'/>
                <CheckboxItem name='trimmer'/>
                <CheckboxItem name='scissors'/>
            </div>
            <div className='checkbox-group'>
                <p className='checkbox-group__name'>Brand</p>
                <CheckboxItem name='jaguar'/>
                <CheckboxItem name='panasonic'/>
                <CheckboxItem name='oster'/>
                <CheckboxItem name='sibel'/>
                <CheckboxItem name='wahi'/>
                <CheckboxItem name='kasho'/>
            </div>
            <div className='checkbox-group'>
                <p className='checkbox-group__name'>Country of origin</p>
                <CheckboxItem name='ukraine'/>
                <CheckboxItem name='usa'/>
                <CheckboxItem name='china'/>
                <CheckboxItem name='japan'/>
                <CheckboxItem name='france'/>
            </div>
        </div>

    )
}

export default CheckboxFilter;