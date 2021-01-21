import React, {useState} from 'react'
import './styles.less'
import axios from "axios";
import {Link} from "react-router-dom";

import {Button, Modal, Form, Input} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const LoginFormInModal = ({visible, onSubmit, onCancel}) => {
  const [form] = Form.useForm();

  const onOk = () => {
    form.validateFields()
        .then((userData) => {
          form.resetFields();
          onSubmit(userData);
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
  }
  return (
      <Modal
          visible={visible}
          title="LogIn"
          okText="Log in"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={onOk}
      >
        <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
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
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item className='test-elements-class'>
                <Link to="/forgot/password">Forgot password?</Link>
            </Form.Item>
            <Form.Item className='test-elements-class'>
                Do not have an account?
                <Link to="/register"> Register now!</Link>
            </Form.Item>

        </Form>
      </Modal>
  );
};

const Login = ({history}) => {
  const [visible, setVisible] = useState(false);

  const onSubmit = (userData) => {
    console.log('Received user data of login form: ', userData);
    axios.post(`${process.env.REACT_APP_API}/customers/login`, userData)
        .then(loginResult => {
            console.log('Result of users login information ---> ', loginResult.data);
            localStorage.setItem('token', loginResult.data.token)
            history.push('/')
        })
        .catch(err => {
            console.log('Something bad happened! ---> ', err.response.data.loginOrEmail || err.response.data.password)
        })

    // setVisible(false);
  };

  return (
      <div>
        <Button
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
        >
          Click to log in now!
        </Button>
        <LoginFormInModal
            visible={visible}
            onSubmit={onSubmit}
            onCancel={() => {
              setVisible(false);
            }}
        />
      </div>
  );
};

export default Login