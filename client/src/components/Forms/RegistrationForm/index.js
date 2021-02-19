import React from "react";
import "./styles.less";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { collectionItemsForm, onlyNumbers, onlyLetters } from "./collectionItems";
import { formItemLayout2, tailFormItemLayout} from "./formLayouts"
import { Link, useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { showModal } from "../../../store/modal/modalAction";
import { useDispatch } from "react-redux";
import LoginService from "../../../services/LoginService";
import jwt_decode from "jwt-decode";
import { authUser } from "../../../store/user/userAction";
import {errorRegisterToast,successRegisterToast} from "../../Toasters";
import { ToastContainer } from "react-toastify";


const RegistrationForm = (props) => {
  console.log("props.handleRegisterModalClose",props.handleRegisterModalClose);
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const showModalLogin = () => {
    dispatch(showModal({status: true, type: 'LoginForm'}));
  };

  const onFinish = (values) => {
    const newCustomer = { ...values, isAdmin: false };
    const userData = {}
    axios.post(`${process.env.REACT_APP_API}/customers`, newCustomer)
      .then(savedCustomer => {
        const {data} = savedCustomer
        userData.loginOrEmail = data.email;
        userData.password = values.password;
        LoginService.LoginResult(userData)
          .then(loginResult => {
            localStorage.setItem('token', loginResult.token);
            const decoded = jwt_decode(loginResult.token);
            delete decoded.iat
            dispatch(authUser({...decoded, isAuthenticated: true}));
            props.modal !== true &&
            history.push('/');
            successRegisterToast()
            props.modal &&
            props.handleRegisterModalClose()
          })
          .catch(err => {
            errorRegisterToast()
            console.log("login error",err);
          })
      })
      .catch(err => {
        errorRegisterToast()
        console.log("Registration error");
        console.log(err);
      });
  };


  return (
    <>
    <Form
      {...formItemLayout2}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        phone: "+380"
      }}
      scrollToFirstError
    >
      <Form.Item className='registration-form-title' {...tailFormItemLayout}>
          Register
      </Form.Item>
      {collectionItemsForm.map(formItem =>
        <Form.Item name={formItem.name}
                   label={formItem.label}
                   rules={formItem.rules}
                   key={formItem.name}>
          {formItem.name === "password"
            ? <Input.Password maxLength={25} placeholder={formItem.label}/>
            : formItem.name === "phone"
              ? <Input maxLength={13} onKeyPress={onlyNumbers()}/>
              : formItem.name === "firstName" || formItem.name === "lastName"
              ? <Input placeholder={formItem.label} onKeyPress={onlyLetters()} maxLength={25}/>
              : <Input placeholder={formItem.label} maxLength={25}/>
          }
        </Form.Item>
      )}
      <Form.Item {...tailFormItemLayout}>
        <Button className='registration-button' type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <span onClick={showModalLogin}>Already registered?(link to Login Form MODAL)</span>
        <Link to="/login">link to Login PAGE</Link>
      </Form.Item>
    </Form>
      <ToastContainer/>
    </>
  );
};

export default RegistrationForm;
