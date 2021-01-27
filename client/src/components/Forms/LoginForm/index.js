import React from 'react';
import './styles.less'
import {Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import LoginService from "../../../services/LoginService";

const Login = () => {
    const onFinish = (customerData) => {
        console.log('Received values of form: ', customerData);
        message.loading({content: 'Loading...', key: 'updatable'});

        LoginService.LoginResult(customerData)
            .then(loginResult => {
                message.success({content: 'Successful!', key: 'updatable', duration: 2});
                localStorage.setItem('token', loginResult.token);
                return <Link to="/" />
            })
            .catch(err => {
                const error = err.response.data;
                message.error({content: error.loginOrEmail || error.password, key: 'updatable', duration: 3});
            })
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="loginOrEmail"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username or Email!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item className='test-elements-class'>
                <Link to="/forgot/password">Forgot password?</Link>
            </Form.Item>
            <Form.Item className='test-elements-class'>
                Do not have an account?
                <Link to="/register"> Register now!</Link>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login