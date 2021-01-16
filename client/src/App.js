import React from 'react';
import './App.less';
import BasicForm from "./components/basicForm/BasicForm";
// import FormWithUseHook from "./components/FormWithUseHook";
import {Divider} from "antd";
import ButtonConfig from './components/button/Button'





import FormSizeDemo from "./components/FormWithUseHook";


const App = () => (
    <>

        {/*<div className={'AppContainer'}>*/}
        {/*    <BasicForm/>*/}
        {/*</div>*/}
        <Divider/>
        <div className={'AppContainer'}>
            <FormSizeDemo/>
        </div>

    </>

);

export default App;