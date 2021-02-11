import {Button, Col, Form, Input} from "antd";
import {collectionItemsProfile} from "../../Forms/RegistrationForm/collectionItems";
import React, {useEffect} from "react";
import Ajax from "../../../services/Ajax";

const {get,put} = Ajax;


const UserInformation = () => {

    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 16
        },
    };
    const formTailLayout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 3,
            offset: 13,
        },
    };

    const [form] = Form.useForm();

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            put('/customers','', values)
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
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
    },[form])
// ?????? депенденси
    return (
        <Col xs={{span: 12}}>
            <Form
                form={form}
                {...layout}
                name="profile"
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
                    <Button type="primary" onClick={onCheck} >
                        Check
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    )
}
export default UserInformation;