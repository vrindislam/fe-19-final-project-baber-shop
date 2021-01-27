import React from "react";
import { Modal } from "antd";
import withModal from "../index";
import LoginFormInModal from "../../../pages/Auth/Login"

const ModalLogin = (props) => {

  return (
    <div>
      {props.modalTypes === "LoginForm" &&
      <Modal
        centered
        visible={props.modalHandler}
        onCancel={props.handleRegisterModalClose}
        width={1000}
        footer={false}
      >
        <LoginFormInModal onOk={props.handleRegisterModalClose}/>
      </Modal>
      }
    </div>
  );
};

export default withModal(ModalLogin);