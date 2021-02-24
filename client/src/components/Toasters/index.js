import React from 'react';
import "./styless.less"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import {Button} from "antd";
import { showModal } from "../../store/modal/modalAction";
import { useDispatch } from "react-redux";

const LoginModal = () => {
  const dispatch = useDispatch();
  const showModalLogin = () => {
    dispatch(showModal({status: true, type: 'LoginForm'}));
  };

  return (
    <div className="error-registration_wrapper">
      <p>You already registered</p>
      <Button className="error-registration_button" onClick={showModalLogin}>Click to Login</Button>
    </div>
  )
}
export const errorRegisterToast = () => {
  toast.error(<LoginModal/>,{
    position: toast.POSITION.TOP_CENTER,
    autoClose: 4000
  })
}
export const successRegisterToast = () => {
  toast.success("Registration complete",{
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000
  })
}
