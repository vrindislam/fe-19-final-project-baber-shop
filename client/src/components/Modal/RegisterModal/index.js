import React from "react";
// import "./styles.less";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Register from "../../../pages/Auth/Register/index"
import {showRegisterModal, hideRegisterModal} from '../../../store/registerModalAction'

const ModalRegister () => {
  const modalHandler = useSelector(state => state.myModalRegister.registerModalOpen);
  const dispatch = useDispatch();
  console.log('modalHandler-modalHandler-modalHandler',modalHandler);

  const handleRegisterModal = () => {
    dispatch(showRegisterModal())
  }
  const handleRegisterModalClose = () => {
    dispatch(hideRegisterModal())
  }

  return (
    <div>
      <Button type="primary" onClick={handleRegisterModal}>
        Зарегистрироваться?
      </Button>
      <Modal
        centered
        visible={modalHandler}
        onCancel={handleRegisterModalClose}
        width={1000}
        footer={false}
      >
        <Register onOk={handleRegisterModalClose}/>
      </Modal>
    </div>
  );
}

export default ModalRegister;
