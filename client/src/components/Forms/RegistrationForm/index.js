import React from "react";
import "./styles.less";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { collectionItemsForm } from "./collectionItems";
import { formItemLayout2, tailFormItemLayout} from "./formLayouts"
import { Link } from "react-router-dom";

import login from '../../../pages/Auth/Login/index';
import withModal from "../../../components/Modal/index";
import { showMeModalINeed } from "../../../store/modalTypes/modalTypesAction";
import { showModal } from "../../../store/modal/modalAction"
import { useDispatch } from "react-redux";

const RegistrationForm = (props) => {
  const [form] = Form.useForm();
  console.log(props.onOk);

  const ModalLogin = withModal(login)

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

  const dispatch = useDispatch()
  const showModalLogin = () => {
    dispatch(showMeModalINeed("LoginForm"));
    dispatch(showModal(true));
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
      <ModalLogin typeOfModal="LoginForm"/>
    </Form>
  );
};

export default RegistrationForm;
