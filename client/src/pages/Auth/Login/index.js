import React from 'react'
import './styles.less'
import LoginForm from "../../../components/Forms/LoginForm";

const Login = () => {
    return (
        <div className='login-page-wrapper'>
            <LoginForm btnWidth={'30%'}/>
        </div>
    )
}

export default Login