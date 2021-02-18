import React, {useReducer} from 'react';
import './styles.less';
import CheckoutNavigation from "./CheckoutNavigation";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutSteps from "./CheckoutSteps";
import CheckoutContext from "./util/CheckoutContext";
import actions from "./util/actions";

const Checkout = () => {

    const initialState = {
        step: 2,
        address: null,
        shipping: null,
        payment: null
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case actions.nextStep:
                return {
                    ...state,
                    step: state.step + 1
                }
            case actions.goToStep:
                return {
                    ...state,
                    step: action.payload
                }
            case actions.setAddress:
                return {
                    ...state,
                    address: action.payload
                }
            case actions.setShipping:
                return {
                    ...state,
                    shipping: action.payload
                }
            case actions.setPayment:
                return {
                    ...state,
                    payment: action.payload
                }
            case actions.placeOrder:
                return initialState;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const checkoutState = {state, dispatch};

    return (
        <CheckoutContext.Provider value={checkoutState}>
            <div className='checkout'>
                <CheckoutNavigation/>
                <CheckoutSteps>
                    <CheckoutAddress/>
                    <CheckoutShipping/>
                    <CheckoutPayment/>
                </CheckoutSteps>

            </div>
        </CheckoutContext.Provider>
    );
}

export default Checkout;