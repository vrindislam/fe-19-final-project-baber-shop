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
        </>
    );
}
export default CheckboxGroup;