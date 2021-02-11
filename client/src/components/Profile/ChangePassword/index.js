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
        message.warning('Both fields must be filled!');
    };

    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            if (values.password !== values.newPassword) {
                put('/customers/password', '', values);
                alert('Your user data has been successfully updated');
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
                    rules={[{required: true, message: 'Please enter your old password!'}]}
                >
                    <Input.Password placeholder='Old password'/>
                </Form.Item>

                <Form.Item
                    label='New password'
                    name='newPassword'
                    rules={[{required: true, message: 'Please enter your new password!'}]}
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