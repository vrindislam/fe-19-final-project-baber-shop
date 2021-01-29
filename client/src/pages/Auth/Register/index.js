import React from 'react';
import RegistrationForm from '../../../components/Forms/RegistrationForm/index';
import withModal from "../../../components/Modal/index";
import { showMeModalINeed } from "../../../store/modalTypes/modalTypesAction";
import { showModal } from "../../../store/modal/modalAction"
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch()
  const showModalRegistration = () => {
    dispatch(showMeModalINeed("RegistrationForm"));
    dispatch(showModal(true));
  };

  const ModalReg = withModal(RegistrationForm)
  return (
    <>
      <ModalReg typeOfModal="RegistrationForm" width={1000}/>
      <RegistrationForm />
      <button onClick={showModalRegistration}>Click me to show Register Modal</button>
    </>
  )
}

export default Register