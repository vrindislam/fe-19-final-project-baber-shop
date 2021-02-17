import React from 'react';
import './styles.less';
import CheckboxItem from "./CheckboxItem";

const CheckboxFilter = ({filters, clickCheckbox, parsedUrl}) => {

    const allTypes = filters.map(item => {
        return item.type
    })
    const uniqTypes = Array.from(new Set(allTypes));

    return (
        <div className='checkbox-container' onClick={clickCheckbox}>
            {
                uniqTypes.map(item =>
                    <div key={item} className='checkbox-group'>
                        <p className='checkbox-group__name'>{item}</p>
                        <CheckboxItem parsedUrl={parsedUrl} type={item}/>
                    </div>
                )
            }
        </div>
    )
}

export default CheckboxFilter;