import {Button, Col, Form, Input, message} from "antd";
import React from "react";
import Ajax from "../../../services/Ajax";
import './style.less'

const {put} = Ajax;


const ChangePassword = () => {
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
    const warning = () => {
        message.warning('The new password is the same as the old one.');
    };
    const warning2 = () => {
        message.warning('Enter correct password!');
    };
    const warning3 = () => {
        message.warning('You entered wrong old password!');
    };
    const success = () => {
        message.success('Your user data has been successfully updated');
    };
    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            console.log(values)
            if (values.password !== values.newPassword) {
                const result = await put('/customers/password', '', values);
                console.log(result)
                if (result.password === 'Password does not match') {
                    warning3()
                } else {
                    success()
                }
            } else {
                warning()
            }
        } catch (errorInfo) {
            warning2();
        }
    }

    return (
        <Col xs={{span: 20, offset: 2}} sm={{span: 8, offset: 2}} md={{span: 8, offset: 2}}
             xl={{span: 6, offset: 2}}>
            <Form
                {...layout}
                name="changePassword"
                form={form}
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    label='Old password'
                    name='password'
                    rules={[{required: true, message: 'Please enter your old password!'}, {
                        min: 7,
                        message: 'Must be min 7 characters'
                    }, {max: 30, message: 'Must be max 30 characters'}]}
                >
                    <Input.Password placeholder='Old password'/>
                </Form.Item>

                <Form.Item
                    label='New password'
                    name='newPassword'
                    rules={[{required: true, message: 'Please enter your new password!'}, {
                        min: 7,
                        message: 'Must be min 7 characters'
                    }, {max: 30, message: 'Must be max 30 characters'}]}
                >
                    <Input.Password placeholder='New password'/>
                </Form.Item>

                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={onFinish}>
                        Change password
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    )
}
export default ChangePassword;