import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {Form, Input} from "antd";
import {collectionItemsCheckoutPayment} from "../../../Forms/RegistrationForm/collectionItems";

const PaymentForm = ({disabled}) => {
    const [state, setState] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    });

    const handleInputFocus = (e) => {
        setState({...state, focus: e.target.name});
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setState({...state, [name]: value});
    }

    const [form] = Form.useForm();

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24
        },
    };

    return (
        <div id="PaymentForm">
            <Cards
                cvc={state.cvc}
                expiry={state.expiry}
                focused={state.focus}
                name={state.name}
                number={state.number}
            />
            <Form
                form={form}
                {...layout}
                name="checkout-payment"
                initialValues={{
                    remember: true,
                }}
            >
                {collectionItemsCheckoutPayment.map(formItem =>
                    <Form.Item
                        label={formItem.label}
                        name={formItem.name}
                        rules={formItem.rules}
                        key={formItem.name}
                    >
                        <Input name={formItem.name} placeholder={formItem.label} disabled={disabled}
                               onChange={handleInputChange} onFocus={handleInputFocus}/>
                    </Form.Item>
                )}
            </Form>
        </div>
    );
}

export default PaymentForm;