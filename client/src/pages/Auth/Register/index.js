// import React from 'react';
// import RegistrationForm from '../../../components/Forms/RegistrationForm/'
//
// import ModalRegistration from '../../../components/Modal/RegisterModal/'
// import { useDispatch } from "react-redux";
// import { showRegistrationModal } from "../../../store/modalTypes/modalTypesAction"
// import { showModal } from "../../../store/modal/modalAction"
//
//
// const Register = () => {
//   const dispatch = useDispatch()
//   const showModalRegistration = () => {
//     dispatch(showRegistrationModal());
//     dispatch(showModal());
//   };
//
//   return (
//     <>
//     <RegistrationForm/>
//     <ModalRegistration/>
//     <button onClick={showModalRegistration}>Click me to show Register Modal</button>
//     </>
//     )
// }
//
// export default Register


import React from 'react';
import RegistrationForm from '../../../components/Forms/RegistrationForm/index';
import LoginFormInModal from '../../../pages/Auth/Login/index';
import withModal from "../../../components/Modal/index";
import { showRegistrationModal, showLoginModal } from "../../../store/modalTypes/modalTypesAction";
import { showModal } from "../../../store/modal/modalAction"
import { useDispatch } from "react-redux";




const Register = () => {
  const dispatch = useDispatch()
  const showModalRegistration = () => {
    dispatch(showRegistrationModal());
    dispatch(showModal(true));
  };
  const showModalLogin = () => {
    dispatch(showLoginModal());
    dispatch(showModal(true));
  };

  const ModalReg = withModal(RegistrationForm)
  const ModalLogin = withModal(LoginFormInModal)
  return (
    <>
      <ModalReg typeOfModal="RegistrationForm" width={1000}/>
      <ModalLogin typeOfModal="LoginForm" width={500}/>
      <RegistrationForm/>
      <button onClick={showModalRegistration}>Click me to show Register Modal</button>
      <button onClick={showModalLogin}>Click me to show Login Modal</button>
    </>
  )
}

export default Register