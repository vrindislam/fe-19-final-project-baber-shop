import React, { useState } from 'react';
import './styles.less';

const CheckboxFilter = () => {

    const [checkboxArr, setCheckbox] = useState([]);

    const catchCheckbox = (e) => {
        const clicked = e.target;
        const index = checkboxArr.findIndex(item => item === clicked.value);
        const clonedArr = [...checkboxArr];
        if (clicked.type === 'checkbox') {
            console.log(clicked.value, 'was clicked');
            if (index < 0) {
                clonedArr.push(clicked.value);
                setCheckbox(clonedArr);
                console.log('this checkbox arr', clonedArr);
            } else {
                const filtered = clonedArr.filter(item => item !== clicked.value);
                setCheckbox(filtered);
                console.log('this checkbox arr', filtered);
            }
        }
    }

    return (
        <>
            <div className='checkbox-container' onClick={catchCheckbox}>
                <div className='checkbox-group'>
                    <p className='checkbox-group__name'>Category</p>
                    <input className='checkbox-group__item' type="checkbox" value='razor'/> Razor <br/>
                    <input className='checkbox-group__item' type="checkbox" value='trimmer'/> Trimmer <br/>
                    <input className='checkbox-group__item' type="checkbox" value='scissors'/> Scissors <br/>
                </div>
                <div className='checkbox-group'>
                    <p className='checkbox-group__name'>Brand</p>
                    <input className='checkbox-group__item' type="checkbox" value='jaguar'/> Jaguar <br/>
                    <input className='checkbox-group__item' type="checkbox" value='panasonic'/> Panasonic <br/>
                    <input className='checkbox-group__item' type="checkbox" value='oster'/> Oster <br/>
                    <input className='checkbox-group__item' type="checkbox" value='sibel'/> Sibel <br/>
                    <input className='checkbox-group__item' type="checkbox" value='wahi'/> Wahi <br/>
                    <input className='checkbox-group__item' type="checkbox" value='kasho'/> Kasho <br/>
                </div>
                <div className='checkbox-group'>
                    <p className='checkbox-group__name'>Country of origin</p>
                    <input className='checkbox-group__item' type="checkbox" value='Ukraine'/> Ukraine <br/>
                    <input className='checkbox-group__item' type="checkbox" value='China'/> China <br/>
                    <input className='checkbox-group__item' type="checkbox" value='France'/> France <br/>
                    <input className='checkbox-group__item' type="checkbox" value='USA'/> USA <br/>
                    <input className='checkbox-group__item' type="checkbox" value='Japan'/> Japan <br/>
                </div>
            </div>
        </>
    )
}

export default CheckboxFilter;