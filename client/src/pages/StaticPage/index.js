import React, {useEffect, useState} from "react";
import {Layout, Typography} from "antd";
import './styles.less'
import {Redirect, useParams} from "react-router";
import Ajax from "../../services/Ajax";
import parse from 'html-react-parser';

const {Content} = Layout;
const {Title} = Typography;
const {get} = Ajax;


const StaticPage = () => {
    const {id} = useParams();
    const [page, setPage] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        get(`/pages/${encodeURIComponent(id)}`)
            .then(page => setPage(page))
            .catch(err => {
                console.log(err)
                setPage(null)
                setError(true)
            });
    }, [id])
    return (
        <>
            {page !== null ?
                <Content className='staticPage-container'>
                    <Title>{page.title}</Title>
                    {parse(page.htmlContent)}
                </Content>
                : error
                    ? <Redirect to={'/404'}/>
                    : ''
            }
        </>
    )
}

export default StaticPage;

