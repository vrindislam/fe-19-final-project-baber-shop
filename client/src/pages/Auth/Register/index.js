import React from 'react';
import RegistrationForm from '../../../components/Forms/RegistrationForm/'

import ModalRegistration from '../../../components/Modal/RegisterModal/'
import { useDispatch } from "react-redux";
import { showRegistrationModal } from "../../../store/modalTypes/modalTypesAction"
import { showModal } from "../../../store/modal/modalAction"


const Register = () => {
  const dispatch = useDispatch()
  const showModalRegistration = () => {
    dispatch(showRegistrationModal());
    dispatch(showModal());
  };

  return (
    <>
    <RegistrationForm/>
    <ModalRegistration/>
    <button onClick={showModalRegistration}>Click me to show Register Modal</button>
    </>
    )
}

export default Register
