// import React from "react";
// // import './styles.less'
// import { useDispatch, useSelector } from "react-redux";
// import { hideModal } from "../../store/modal/modalAction";
//
// const withModal = WrappedComponent => {
//   const WithModal = () => {
//     const modalHandler = useSelector(state => state.modalHandler.modalOpen);
//     const modalTypes = useSelector(state => state.modalTypes.typesOfModal)
//     const dispatch = useDispatch();
//
//     const handleRegisterModalClose = () => {
//       dispatch(hideModal())
//     }
//     return (
//       <WrappedComponent
//         modalHandler={modalHandler}
//         handleRegisterModalClose={handleRegisterModalClose}
//         modalTypes={modalTypes}
//       />
//     )
//   }
//   return WithModal
// }
//
// export default withModal

import React from "react";
// import './styles.less'
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/modal/modalAction";
import { Modal } from "antd";

const withModal = WrappedComponent => {
  const WithModal = (props) => {
    const modalHandler = useSelector(state => state.modalHandler.modalOpen);
    const modalTypes = useSelector(state => state.modalTypes.typesOfModal)
    const dispatch = useDispatch();

    const handleRegisterModalClose = () => {
      dispatch(showModal(false))
    }
    return (
      <>
        {props.typeOfModal === modalTypes &&
          <Modal
            centered
            visible={modalHandler}
            onCancel={handleRegisterModalClose}
            width={props.width}
            footer={false}
          >
            <WrappedComponent
              modalHandler={modalHandler}
              handleRegisterModalClose={handleRegisterModalClose}
            />
          </Modal>
        }
      </>
    )
  }
  return WithModal
}

export default withModal