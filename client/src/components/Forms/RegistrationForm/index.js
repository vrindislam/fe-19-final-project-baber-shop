import React from "react";
import "./styles.less";
import axios from "axios";
import { collectionItemsForm } from "./collectionItems";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";

import LoginFormInModal from "../../Modal/LoginModal_test/index";
import { showLoginModal } from "../../../store/modalTypes/modalTypesAction";
import { showModal } from "../../../store/modal/modalAction";
import { useDispatch } from "react-redux";

const { Title } = Typography;
const formItemLayout2 = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 8
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};


const RegistrationForm = (props) => {
  const [form] = Form.useForm();
  console.log(props.onOk);

  const onFinish = (values) => {
    const newCustomer = { ...values, isAdmin: false };
    axios.post(`${process.env.REACT_APP_API}/customers`, newCustomer)
      .then(savedCustomer => {
        console.log(savedCustomer);
      })
      .catch(err => {
        console.log(err);
      });
    props.onOk();
  };

  console.log();
  const dispatch = useDispatch();
  const showModalLog = () => {
    dispatch(showLoginModal());
    dispatch(showModal());
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
      <Title level={4} className='registration-form-title'>Registration</Title>
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
            ? <Input.Password/>
            : <Input/>
          }
        </Form.Item>
      )}
      <Form.Item {...tailFormItemLayout}>
        <Button className='registration-button' type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        {/* <button onClick={showModalLog}>Already registered?(link to Login Form)</button> */}
        <span onClick={showModalLog}>Already registered?(link to Login Form MODAL)</span>
        <Link to="/login">link to Login PAGE</Link>
      </Form.Item>
      <LoginFormInModal/>
    </Form>
  );
};

export default RegistrationForm;
