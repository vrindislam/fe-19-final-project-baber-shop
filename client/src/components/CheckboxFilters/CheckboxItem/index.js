import React, {useState, useEffect} from 'react';
import './styles.less';
import Ajax from "../../../services/Ajax";

const CheckboxItem = ({type}) => {

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

    return (
        <>{
            names.map(item =>
                <div key={item}>
                    <input data-type={type} type="checkbox" id={item} name={item}/>
                    <label htmlFor={item}>{item}</label>
                </div>
            )
        }
        </>
    )
}
export default CheckboxItem;