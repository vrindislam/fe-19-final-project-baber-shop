import React from "react";
import {Button, Form, Input, message} from "antd";
import {collectionItemsCheckoutAddress, onlyNumbers} from "../../Forms/RegistrationForm/collectionItems";
import {useDispatch} from "react-redux";
import "./styles.less";
import {setAddress} from "../../../store/checkout/checkoutAction";

const CheckoutAddress = ({disabled, onChange}) => {
    const dispatch = useDispatch();

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
            dispatch(setAddress(values));
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
                    phone: "+380"
                }}
                scrollToFirstError
            >
                {collectionItemsCheckoutAddress.map(formItem =>
                    <Form.Item
                        label={formItem.label}
                        name={formItem.name}
                        rules={formItem.rules}
                        key={formItem.name}
                    >
                        {formItem.name === "phone"
                            ? <Input placeholder={formItem.label} disabled={disabled} maxLength={13}
                                     onKeyPress={onlyNumbers()}/>
                            : <Input placeholder={formItem.label} disabled={disabled}/>
                        }
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