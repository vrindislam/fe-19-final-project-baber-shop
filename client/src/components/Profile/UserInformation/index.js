import {Button, Col, Form, Input, message} from "antd";
import {collectionItemsProfile} from "../../Forms/RegistrationForm/collectionItems";
import React, {useEffect} from "react";
import Ajax from "../../../services/Ajax";
import './style.less'

const {get, put} = Ajax;


const UserInformation = () => {
    const layout = {
            labelCol: {
                span: 24,
            },
            wrapperCol: {
                span: 24
            },
        };

    const formTailLayout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };

    const [form] = Form.useForm();
    const success = () => {
        message.success('Your user data has been successfully updated');
    };
    const error = () => {
        message.error('Enter correct information');
    };
    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            await put('/customers', '', values);
            success();

        } catch (errorInfo) {
            error ();
        }
    }

    useEffect(() => {
        let cleanupFunction = false;
        get('/customers/customer')
            .then(customer => {
                if (!cleanupFunction)
                    form.setFieldsValue({
                            firstName: customer.firstName,
                            lastName: customer.lastName,
                            login: customer.login,
                            email: customer.email,
                            phone: customer.phone,
                        }
                    )
                console.log('Customer', customer)
            })
        return () => cleanupFunction = true
    }, [form])

    return (
        <Col xs={{span: 20, offset: 2}} sm={{span: 12, offset: 1}} md={{span: 12, offset: 2}} xl={{span: 10, offset: 2}}>
            <Form
                form={form}
                {...layout}
                name="userInfo"
                initialValues={{
                    remember: true,
                }}
            >
                {collectionItemsProfile.map(formItem =>
                    formItem.name !== "password"
                        ? <Form.Item
                            label={formItem.label}
                            name={formItem.name}
                            rules={formItem.rules}
                            key={formItem.name}
                        >
                            <Input placeholder={formItem.name}/>
                        </Form.Item>
                        : ''
                )}
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={onFinish}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    )
}
export default UserInformation;