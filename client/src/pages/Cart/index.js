import React from "react";
import "./styles.less";
import ProductsContainer from "../../components/CartProductsContainer";
import CartTotal from "../../components/CartTotal";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import withModal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/modal/modalAction";

const Cart = (props) => {
  const typeOfModal = "RegistrationForm";
  const ModalReg = withModal(RegistrationForm, typeOfModal);
  const dispatch = useDispatch();
  const productsLength = useSelector(state => state.cartProducts.products.length);
  const showModalR = () => {
    dispatch(showModal({ status: true, type: typeOfModal }));
  };

  return (
    <>
      {!productsLength
        ? <p>ooops, you have't added products yet</p>
        : <>
          <div className="cart-wrapper-div">
            <ProductsContainer/>
            <CartTotal/>
          </div>
          <button onClick={showModalR}>SHOW REGISTRATION</button>
          <ModalReg width={1000}/>
        </>
      }
    </>
  );
};

export default Cart;