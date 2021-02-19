import React from "react";
import './styles.less';
import {useLocation} from "react-router-dom";

import { Breadcrumb, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const BreadCrumbs = () => {
    const {pathname, key} = useLocation();
    const pathNames = pathname.split('/').filter(name => name);

    return (
        <Breadcrumb separator=">" className="breadcrumbs">
            {pathNames.length > 0
                ? <Breadcrumb.Item key={key} href="/" className="breadcrumb-item">
                    <HomeOutlined />
                </Breadcrumb.Item>
                : ''
            }

            {pathNames.map((name, index) => {
                const pageName = name.charAt(0).toUpperCase() + name.slice(1);
                const redirectTo = `/${pathNames.slice(0, index+1).join('/')}`;
                const isLast = index === pathNames.length - 1;

                return (
                    isLast
                        ? <Breadcrumb.Item key={key} className="breadcrumb-item">
                            <Typography>{pageName}</Typography>
                    </Breadcrumb.Item>
                        : <Breadcrumb.Item key={key} href={redirectTo}
                                           className="breadcrumb-item">
                        <span>{pageName}</span>
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    )
}

export default BreadCrumbs
