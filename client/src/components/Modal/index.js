import React from "react";
// import './styles.less'
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../store/modal/modalAction";

const withModal = WrappedComponent => {
  const WithModal = () => {
    const modalHandler = useSelector(state => state.modalHandler.modalOpen);
    const modalTypes = useSelector(state => state.modalTypes.typesOfModal)
    const dispatch = useDispatch();

    const handleRegisterModalClose = () => {
      dispatch(hideModal())
    }
    return (
      <WrappedComponent
        modalHandler={modalHandler}
        handleRegisterModalClose={handleRegisterModalClose}
        modalTypes={modalTypes}
      />
    )
  }
  return WithModal
}

export default withModal
