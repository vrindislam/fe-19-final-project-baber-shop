import React from 'react';
import './styles.less'

const CheckboxItem = (props) => {

    return (
        <>
            <div>
                <input data-type={props.type} type="checkbox" id={props.name} name={props.name}/>
                <label htmlFor={props.name}>{props.name}</label>
            </div>

        </>
    )
}
export default CheckboxItem;