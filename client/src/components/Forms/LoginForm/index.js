import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import './styles.less'
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import LoginService from "../../../services/LoginService";
import Preloader from "../../Preloader";
import {useDispatch} from "react-redux";
import {authUser} from "../../../store/user/userAction";

const Login = ({toCloseModal}) => {
    const [form] = Form.useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onFinish = (customerData) => {
        console.log('Received values of form: ', customerData);
        setLoading(true);

        LoginService.LoginResult(customerData)
            .then(loginResult => {
                setLoading(false);
                localStorage.setItem('token', loginResult.token);
                dispatch(authUser(true))
                setError('');
                toCloseModal();
                form.resetFields(['loginOrEmail', 'password']);
                history.push('/');
            })
            .catch(err => {
                const error = err.response.data;
                setLoading(false);
                setError(error.loginOrEmail || error.password);
            })
    };

    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="loginOrEmail"
                className='input-label'
                label='Login or Email'
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username or Email!',
                    },
                ]}
                style={{margin: 0}}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                       placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                className='input-label'
                label='Password'
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
                style={{margin: 0}}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item style={{margin: 0}}>
                <Link to="/forgot/password" onClick={toCloseModal}>Forgot password?</Link>
            </Form.Item>
            <Form.Item>
                Do not have an account?
                <Link to="/register" onClick={toCloseModal}> Register now!</Link>
            </Form.Item>
            <Button className='login-button' type="primary" htmlType="submit">
                Log in
            </Button>
            <p className='preloader' style={{color: loading ? 'black' : 'red'}}>
                {loading ? <Preloader/> : error}
            </p>
        </Form>
    );
};

export default Login