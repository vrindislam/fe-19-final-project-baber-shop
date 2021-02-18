import React, {useContext} from "react";
import "./styles.less";
import {Col, Row} from "antd";
import CheckoutContext from "../util/CheckoutContext";
import actions from "../util/actions";
import {useHistory} from "react-router-dom";

const CheckoutSteps = ({children}) => {

    const {state, dispatch} = useContext(CheckoutContext);
    const history = useHistory();

    const onStepChange = () => {
        const steps = children.length;
        const newStep = state.step + 1;
        if (newStep < steps) {
            dispatch({type: actions.nextStep});
        } else {
            console.log(state.address);
            console.log(state.shipping);
            console.log(state.payment);

            // TODO: place order here

            dispatch({type: actions.placeOrder});
            history.push('/order-confirmation');
        }
    }

    return (
        <Row className="checkout-steps" gutter={20}>
            {children.map((child, index) => {
                const Component = child.type;
                return (
                    <Col xs={{span: 24}} sm={{span: 8}} md={{span: 8}} xl={{span: 8}} key={index}>
                        <div className="checkout-step" disabled={state.step !== index}>
                            <Component {...child.props} disabled={state.step !== index} onChange={onStepChange}/>
                        </div>
                    </Col>
                )
            })}
        </Row>
    )
}

export default CheckoutSteps;