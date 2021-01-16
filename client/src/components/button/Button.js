import React from 'react';
import { Button } from 'antd';
import './Button.less';

export function CustomButton() {
    return (
        <div className={'SubmitButtonContainer'}>
            <Button type={'primary'} >Primary Button</Button>
        </div>
    );
};

export default CustomButton

