import React from 'react';
import './styles.less';
import {Result} from 'antd';
import {withRouter} from 'react-router-dom'

const Btn = withRouter(({history}) => {

    return (
        <button type='primary' onClick={() => {
            history.push('/')
        }}> Back to Home page!</button>
    );
})

const ErrorPage = () => {
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Something went wrong, boy"
                extra={<Btn/>}
            />
        </>
    );
}
export default ErrorPage;