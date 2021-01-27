import React from "react";
import "./styles.less";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Register from "../../../pages/Auth/Register/index"
import {hideRegisterModal} from '../../../store/registerModal/registerModalAction'

const ModalRegister = () => {
  const modalHandler = useSelector(state => state.myModalRegister.registerModalOpen);
  const dispatch = useDispatch();

  const handleRegisterModalClose = () => {
    dispatch(hideRegisterModal())
  }

  return (
    <div>
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

