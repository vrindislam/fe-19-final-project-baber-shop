import React, {useEffect} from "react";
import { Layout, Menu } from "antd";
import {Link} from 'react-router-dom';
import { ContainerOutlined, DatabaseOutlined, AccountBookOutlined } from "@ant-design/icons";
import "./styles.less";


const { SubMenu, Item } = Menu;
const { Content, Sider } = Layout;

const AdminCatergory = (props) => {
  const defaultSelected = 'category';

  useEffect(() => {
    console.log('AdminCategory did Mount');

  }, [])

  return (
    <Layout className="admin-category-container">
      <Sider width={210} className="sideBar-container">
        <Menu
          mode="inline"
          defaultSelectedKeys={[defaultSelected]}
          defaultOpenKeys={["sub1", "sub2", "sub3"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<ContainerOutlined />} title="Manage Categories">
            <Item key="category">
              <Link to='/admin/category'>Category</Link>
            </Item>
            <Item key="sub">
              <Link to='/admin/sub'>Sub-Category</Link>
            </Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<DatabaseOutlined />} title="Manage Product">
            <Item key="product">
              <Link to='/admin/product'>Product</Link>
            </Item>
            <Item key="products">
              <Link to='/admin/products'>Products</Link>
            </Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<AccountBookOutlined/>} title="Other">
            <Item key="dashbord">
              <Link to='/admin/dashbord'>Dashbord</Link>
            </Item>
            <Item key="password">
              <Link to='/admin/password'>Manage Password</Link>
            </Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content
          className="category-content-container"
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminCatergory;