import React from 'react';
import RegistrationForm from '../../../components/Forms/RegistrationForm/index';
import withModal from "../../../components/Modal/index";
import { showModal } from "../../../store/modal/modalAction"
import { useDispatch } from "react-redux";



const Register = () => {

  const typeOfModal = "RegistrationForm";
  const ModalReg = withModal(RegistrationForm,typeOfModal)
  const dispatch = useDispatch()

  const showModalRegistration = () => {
    dispatch(showModal({status: true, type: typeOfModal}));
  };

  return (
    <>
      <ModalReg width={1000}/>
      <RegistrationForm />
      <button onClick={showModalRegistration}>Click me to show Register Modal</button>
    </>
  )
}

export default Register