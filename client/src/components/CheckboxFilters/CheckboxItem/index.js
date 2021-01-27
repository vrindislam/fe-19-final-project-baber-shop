import React, {useState, useEffect} from 'react';
import './styles.less'
import Ajax from "../../../services/Ajax";


const CheckboxItem = ({types}) => {

    const [names, setNames] = useState([]);

    useEffect(() => {
        async function fetch() {
            const {data} = await Ajax.get(`/filters/${types}`);
            setNames(data);
        }

        fetch()
    }, [types]);

    const arr = names.map(item => {
        return item.name
    })

    return (
        <>{
            arr.map(item =>
                <div>
                    <input data-type={types} type="checkbox" id={types} name={item}/>
                    <label htmlFor={item}>{item}</label>
                </div>
            )
        }
        </>
    )
}
export default CheckboxItem;