import React, {useContext} from "react";
import {Button, Form, Input, message} from "antd";
import {collectionItemsCheckoutAddress} from "../../Forms/RegistrationForm/collectionItems";
import "./styles.less";
import CheckoutContext from "../util/CheckoutContext";
import actions from "../util/actions";

const CheckoutAddress = ({disabled, onChange}) => {
    const {dispatch} = useContext(CheckoutContext);

    const [form] = Form.useForm();

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24
        },
    };

    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            dispatch({type: actions.setAddress, payload: values});
            onChange();
        } catch (errorInfo) {
            message.error('Enter correct information');
        }
    }

    return (
            <div className="checkout-address">
                <h3>Shipping address</h3>
                <Form
                    form={form}
                    {...layout}
                    name="checkout-address"
                    initialValues={{
                        remember: true,
                    }}
                >
                    {collectionItemsCheckoutAddress.map(formItem =>
                        <Form.Item
                            label={formItem.label}
                            name={formItem.name}
                            rules={formItem.rules}
                            key={formItem.name}
                        >
                            <Input placeholder={formItem.label} disabled={disabled}/>
                        </Form.Item>
                    )}
                    {!disabled
                        ?
                        <Form.Item {...layout}>
                            <Button type="primary" onClick={onFinish}>
                                Submit
                            </Button>
                        </Form.Item>
                        :
                        null
                    }
                </Form>
            </div>
    )
}

export default CheckoutAddress;