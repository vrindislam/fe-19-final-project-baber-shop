import React, {useEffect, useState} from 'react';
import './styles.less';
import CheckboxItem from "./CheckboxItem";
import Ajax from "../../services/Ajax";

const CheckboxFilter = ({filters, clickCheckbox, parsedUrl}) => {

    const [catalog, setCatalog] = useState([]);
    const allTypes = filters.map(item => {
        return item.type
    })
    const uniqTypes = Array.from(new Set(allTypes));

    useEffect(() => {
        async function fetch() {
            const result = await Ajax.get('/catalog');
            setCatalog(result);
        }

        fetch()
    }, []);
    console.log('catalog--->', catalog);
    const catalogNames = catalog.map(item => item.name);

    return (
        <div className='checkbox-container' onClick={clickCheckbox}>
            <div className='checkbox-group checkbox-catalog-group'>
                <p className='checkbox-group__name'>Catalog</p>
                {
                    catalogNames.map(item =>
                        <div className='checkbox-group__item' key={item}>
                            <input className='item-filter' data-type={'catalog'} type="checkbox" id={item} name={item}/>
                            <label className='checkbox-label' htmlFor={item}>{item}</label>
                        </div>
                    )
                }
            </div>
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