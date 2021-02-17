import React, {useState, useEffect} from 'react';
import './styles.less';
import Ajax from "../../../services/Ajax";

const CheckboxItem = ({type, parsedUrl}) => {

    const [checkboxNames, setNames] = useState([]);

    useEffect(() => {
        async function fetch() {
            const result = await Ajax.get(`/filters/${type}`);
            setNames(result);
        }

        fetch()
    }, [type]);

    const names = checkboxNames.map(item => {
        return item.name
    })

    const filtersNamesUrl = Object.values(parsedUrl).flat(Infinity);

    return (
        <>{
            names.map(item =>
                <div className='checkbox-group__item' key={item}>
                    <input className='item-filter' data-type={type} defaultChecked={filtersNamesUrl.includes(item)} type="checkbox" id={item} name={item}/>
                    <label className='checkbox-label' htmlFor={item}>{item}</label>
                </div>
            )
        }
        </>
    )
}
export default CheckboxItem;