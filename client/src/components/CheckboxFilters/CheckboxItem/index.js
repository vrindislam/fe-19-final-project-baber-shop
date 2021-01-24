import React from 'react';
import './styles.less'

const CheckboxItem = (props) => {

    return (
        <>
            <div className='checkbox-group__item'>
                <input type="checkbox" id={props.name} name={props.name}/>
                <label htmlFor={props.name}>{props.name}</label>
            </div>
        </>
    )
}
export default CheckboxItem;