import React, {useContext, useEffect, useState} from "react";
import CheckoutContext from "../util/CheckoutContext";
import Ajax from "../../../services/Ajax";
import {Button, message, Radio} from "antd";
import Preloader from "../../Preloader";
import actions from "../util/actions";
import './styles.less';
import PaymentForm from "./PaymentForm";

const CheckoutPayment = ({disabled, onChange}) => {
    const {dispatch} = useContext(CheckoutContext);
    const [loading, setLoading] = useState(true);
    const [methods, setMethods] = useState([]);
    const [value, setValue] = useState(null);

    useEffect(() => {
        let isMounted = true;
        Ajax.get('/payment-methods')
            .then(methods => {
                if (isMounted) {
                    methods = methods.filter(method => method.enabled);
                    setLoading(false);
                    setMethods(methods);
                    setValue(methods.filter(method => method.default).map(method => method.customId)[0]);
                }
            });
        return () => {
            isMounted = false
        };
    }, []);

    const onRadioChange = (e) => {
        setValue(e.target.value);
    }

    const onFinish = async () => {
        if (value) {
            dispatch({type: actions.setPayment, payload: value});
            onChange();
        } else {
            message.error('Select a method or call us.');
        }
    }

    return (
        <div className="checkout-payment">
            <h3>Payment methods</h3>
            {loading
                ?
                <Preloader/>
                :
                null
            }
            <div className="payment-methods">
                <Radio.Group value={value} onChange={onRadioChange}>
                    {methods.map(method => {
                        return (
                            <Radio disabled={disabled} value={method.customId}
                                   key={method.customId}>{`${method.name}`}</Radio>
                        )
                    })}
                </Radio.Group>
            </div>
            <div className="selected-method">
                {
                    methods.filter(method => method.customId === value)[0]
                        ? (
                            <PaymentForm disabled={disabled}/>
                        )
                        : null
                }
            </div>
            {!disabled
                ?
                <Button type="primary" onClick={onFinish}>
                    Submit
                </Button>
                :
                null
            }
        </div>
    )
}

export default CheckoutPayment;