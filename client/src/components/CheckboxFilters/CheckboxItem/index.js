import React, {useState, useEffect} from 'react';
import './styles.less';
import Ajax from "../../../services/Ajax";

const CheckboxItem = ({type, parsedURL}) => {

    const [checkboxNames, setNames] = useState([]);

    useEffect(() => {
        async function fetch() {
            const result = await Ajax.get(`/filters/${type}`);
            setNames(result);
        }

        fetch()
    }, [type]);

    const urlValues = Object.values(parsedURL).flat(Infinity);
    console.log('this url from item---->', urlValues);
    const names = checkboxNames.map(item => {
        return item.name
    })
    console.log('names--->', names);

    return (
        <>{
            names.map(item =>
                <div className='checkbox-group__item' key={item}>
                    <input className='item-filter' data-type={type} checked={urlValues.includes(item)} type="checkbox" id={item} name={item}/>
                    <label className='checkbox-label' htmlFor={item}>{item}</label>
                </div>
            )
        }
        </>
    )
}
export default CheckboxItem;