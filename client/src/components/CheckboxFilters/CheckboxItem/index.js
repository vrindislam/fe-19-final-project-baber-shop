import React, {useState, useEffect} from 'react';
import './styles.less'
import Ajax from "../../../services/Ajax";

const CheckboxItem = ({types}) => {

    const [checkboxNames, setNames] = useState([]);

    useEffect(() => {
        async function fetch() {
            const {data} = await Ajax.get(`/filters/${types}`);
            setNames(data);
        }

        fetch()
    }, [types]);

    const names = checkboxNames.map(item => {
        return item.name
    })

    return (
        <>{
            names.map(item =>
                <div key={item}>
                    <input data-type={types} type="checkbox" id={item} name={item}/>
                    <label htmlFor={item}>{item}</label>
                </div>
            )
        }
        </>
    )
}
export default CheckboxItem;