import React from "react";
import "./styles.less";
import axios from "axios";
import { Button, Form, Input , message } from "antd";
import { collectionItemsForm } from "./collectionItems";
import { formItemLayout2, tailFormItemLayout} from "./formLayouts"
import { Link, useHistory } from "react-router-dom";

import { showModal } from "../../../store/modal/modalAction";
import { useDispatch } from "react-redux";
import LoginService from "../../../services/LoginService";
import jwt_decode from "jwt-decode";
import { authUser } from "../../../store/user/userAction";



const RegistrationForm = (props) => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const showModalLogin = () => {
    dispatch(showModal({status: true, type: 'LoginForm'}));
  };
  console.log("props.modal",props.modal)

  const error = () => {
    message.error(
      <div className="error-message-registration-div">
        <p className="error-message-registration">User has already been registered</p>
        <button
          className='registration-button' type="primary"
          onClick={showModalLogin}>Go to Login Form
        </button>
      </div>
    );
  };
  const success = () => {
    message.success(
      <p className="success-message-registration">User has been successfully registered</p>
    );
  };
  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    const newCustomer = { ...values, isAdmin: false };
    const userData = {}
    axios.post(`${process.env.REACT_APP_API}/customers`, newCustomer)
      .then(savedCustomer => {
        success();
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
            props.handleRegisterModalClose()
          })
          .catch(err => {
            console.log("login error",err);
          })
      })
      .catch(err => {
        error();
        onReset()
        console.log(err);
      });
  };


  return (
    <Form
      {...formItemLayout2}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        phone: 380
      }}
      scrollToFirstError
    >
      <Form.Item className='registration-form-title' {...tailFormItemLayout}>
          Register
      </Form.Item>
      {collectionItemsForm.map(formItem =>
        <Form.Item name={formItem.name}
                   label={formItem.label}
                   rules={[{
                     required: formItem.required,
                     message: formItem.message
                   }, {
                     type: formItem.type,
                     message: formItem.messageType
                   }]}
                   key={formItem.name}>
          {formItem.name === "password"
            ? <Input.Password placeholder={formItem.label}/>
            : <Input placeholder={formItem.label}/>
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
  );
};

export default RegistrationForm;
