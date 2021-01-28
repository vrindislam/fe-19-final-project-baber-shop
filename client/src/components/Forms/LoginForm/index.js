import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import './styles.less'
import {Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoginService from "../../../services/LoginService";
import Preloader from "../../Preloader";
import {useDispatch} from "react-redux";
import {hideLoginModal} from "../../../store/loginModal/loginModalAction";
// не закрывается модальное
// не очищаются поля
// при нажатии сабмит с пустыми инпутами кнопка возвращается в исходный стиль
const Login = () => {
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
                // здесь диспатч isAuth: true
                setError('');
                dispatch(hideLoginModal());
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
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
        >
            <Form.Item className='login-form-input-label'>
                Login or Email
            </Form.Item>
            <Form.Item
                name="loginOrEmail"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username or Email!',
                    },
                ]}
                style={{margin: 0}}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item className='login-form-input-label'>
                Password
            </Form.Item>
            <Form.Item
                name="password"
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
                <Link to="/forgot/password">Forgot password?</Link>
            </Form.Item>
            <Form.Item>
                Do not have an account?
                <Link to="/register"> Register now!</Link>
            </Form.Item>
            <Form.Item style={{margin: 0}}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
            <Form.Item className='login-form-preloader'>
                {loading ? <Preloader /> : error}
            </Form.Item>
        </Form>
    );
};

export default Login