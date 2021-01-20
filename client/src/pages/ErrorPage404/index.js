import React from 'react';
import './styles.less';
import { Result, Button } from 'antd';
import {Redirect} from "react-router-dom";

const redirect = () => {
    console.log('click');
    return(
        <Redirect push to='/home'/>
    )
}

const ErrorPage = (props) => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Something went wrong, boy"
            extra={<Button onClick={redirect} type="primary">Back Home</Button>}
        />


    );
}
export default ErrorPage;