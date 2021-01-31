import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Divider } from "antd";
import "./styles.less";
import AdminSider from "../../../components/AdminSider";
import CategoryForm from "../../../components/Forms/CategoryForm";
import CategoryService from "../../../services/CategoryService";

const { Content } = Layout;

const AdminCatergory = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    CategoryService.getCategoriesSortedPerLevels()
      .then(res => {
          console.log("RES", Object.entries(res));
          setData(JSON.stringify(res))
        }
      )
      .catch(err => console.log(err))
    ;
  }, []);

  return (
    <Layout className="admin-category-container">
      <AdminSider />
      <Content className="category-content-container">
        <Divider orientation="left">Create Category</Divider>
        <Row gutter={16}>
          <Col span={24}>
            <CategoryForm />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <div>{data}</div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AdminCatergory;