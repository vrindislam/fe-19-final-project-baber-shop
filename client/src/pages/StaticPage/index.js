import React, {useEffect, useState} from "react";
import {Layout, Typography} from "antd";
import './styles.less'
import {useParams} from "react-router";
import Ajax from "../../services/Ajax";
import parse from 'html-react-parser';

const {Content} = Layout;
const {Title} = Typography;
const {get} = Ajax;


function StaticPage() {
    const {id} = useParams();
    const [page, setPage] = useState([]);
    useEffect(() => {
        get(`/pages/${id}`)
            .then(page => setPage(page || []))
    }, [id])
    return (
        <Content className='staticPage-container'>
            <Title>{page.title}</Title>
            {parse(page.htmlContent || '')}
        </Content>
    )
}

export default StaticPage;