import React, {useContext} from 'react';
import {Steps} from "antd";
import {CheckCircleOutlined} from "@ant-design/icons";
import CheckoutContext from "../util/CheckoutContext";
import actions from "../util/actions";


const {Step} = Steps;

const CheckoutNavigation = () => {

    const {state, dispatch} = useContext(CheckoutContext);

    const onChange = (current) => {
        if (current <= (state.step + 1)) {
            dispatch({type: actions.goToStep, payload: current});
        }
    }

    return (
        <Steps current={state.step} onChange={onChange}>
            <Step title="Address" icon={state.step === 0 ? <CheckCircleOutlined/> : <></>} disabled={state.step < 0}/>
            <Step title="Shipping" icon={state.step === 1 ? <CheckCircleOutlined/> : <></>} disabled={state.step < 1}/>
            <Step title="Payment" icon={state.step === 2 ? <CheckCircleOutlined/> : <></>} disabled={state.step < 2}/>
        </Steps>
    )
}

export default CheckoutNavigation;