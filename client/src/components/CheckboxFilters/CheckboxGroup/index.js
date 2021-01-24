import React from 'react';
import './styles.less';
import CheckboxItem from "../CheckboxItem";

const CheckboxGroup = (props) => {

    return(
        <>
            <div className='checkbox-group'>
                <p className='checkbox-group__name'>Category</p>
                <CheckboxItem name='razor'/>
                <CheckboxItem name='trimmer'/>
                <CheckboxItem name='scissors'/>
            </div>
        </>
    );
}
export default CheckboxGroup;