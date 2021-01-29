import React from 'react';
import './styles.less'
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {hideLoginModal} from "../../../store/loginModal/loginModalAction";
import Login from "../../Forms/LoginForm";

const LoginModal = () => {
    const modalHandler = useSelector(state => state.loginModal.loginModalVisible);
    const dispatch = useDispatch();
    const loginModalClose = () => {
        dispatch(hideLoginModal())
    }

    return (
        <Modal
            title='LogIn'
            visible={modalHandler}
            onCancel={loginModalClose}
            footer={false}
        >
            <Login toCloseModal={loginModalClose} />
        </Modal>
    )
}

export default LoginModal