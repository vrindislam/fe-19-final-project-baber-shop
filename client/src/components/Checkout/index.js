import React from 'react';
import './styles.less';
import CheckoutNavigation from "./CheckoutNavigation";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutSteps from "./CheckoutSteps";
import Ajax from "../../services/Ajax";

const Checkout = ({products}) => {

    const placeOrder = async (email, phone, address, shipping, payment) => {
        try {
            const customer = await Ajax.get('/customers/customer');
            console.log('customer', customer);
        } catch (err) {
            //
        }

        const newOrder = {
            customerId: "???", // TODO: add customer id
            products, // TODO: fix products
            deliveryAddress: address,
            shipping: shipping,
            paymentInfo: payment,
            status: "not shipped",
            email: email,
            mobile: phone,
            letterSubject: "Thank you for order! You are welcome!",
            letterHtml:
                "<h1>Your order is placed.</h1>"
        };

        console.log("order", newOrder);
        console.log("orderjson", JSON.stringify(newOrder));

        try {
            const order = await Ajax.post('/orders', newOrder);
            console.log('order placed', order);
            return Promise.resolve(order);
        } catch (err) {
            console.error(111, err);
            return Promise.resolve(err);
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