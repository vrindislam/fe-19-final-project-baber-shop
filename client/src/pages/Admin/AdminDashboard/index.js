import React, {useState} from "react";
import {Layout, Row, Col, Divider} from "antd";
import AdminSider from "../../../components/AdminSider";
import ImageUpload from '../../../components/ImageUpload'

import "./styles.less";

const {Content} = Layout;

const AdminDashboard = () => {
  const [images, setImages] = useState([])

    return (
        <Layout className="admin-dashboard-container">
            <AdminSider/>
            <Content className="dashboard-content-container">
                <Divider orientation="left">Admin Dashboard</Divider>
                <Row gutter={16}>
                    <Col span={24} style={{textAlign: 'left'}}>
                        <ImageUpload images={images} setImages={setImages} cloudinaryfolderName={'test4'}/>
                      {JSON.stringify(images)}
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default AdminDashboard;