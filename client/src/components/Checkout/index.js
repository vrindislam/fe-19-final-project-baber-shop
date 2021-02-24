import React from 'react';
import './styles.less';
import CheckoutNavigation from "./CheckoutNavigation";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutSteps from "./CheckoutSteps";
import Ajax from "../../services/Ajax";
import {useSelector} from "react-redux";

const Checkout = ({products}) => {
    
    const {isAuthenticated: isAuth, id} = useSelector(state => state.user);

    const placeOrder = async (email, phone, address, shipping, payment) => {
        const newOrder = {
            deliveryAddress: JSON.stringify(address),
            shipping: JSON.stringify({id: shipping}),
            paymentInfo: JSON.stringify({id: payment}),
            status: "not shipped",
            email: email,
            mobile: phone,
            letterSubject: "Thank you for order! You are welcome!",
            letterHtml:
                "<h1>Your order is placed.</h1>"
        };

        if (isAuth) {
            newOrder.customerId = id;
        } else {
            newOrder.products = JSON.stringify(products);
        }

        try {
            const order = await Ajax.post('/orders', newOrder);
            console.log('Order created:', order);
            return Promise.resolve(order);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    return (
        <div className='checkout'>
            <CheckoutNavigation/>
            <CheckoutSteps onFinish={placeOrder}>
                <CheckoutAddress/>
                <CheckoutShipping/>
                <CheckoutPayment/>
            </CheckoutSteps>
        </div>
    );
}

export default Checkout;