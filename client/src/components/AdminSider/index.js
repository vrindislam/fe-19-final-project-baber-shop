import React from "react";
import { Layout, Menu } from "antd";
import { AccountBookOutlined, ContainerOutlined, DatabaseOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../store/user/userAction";
import { useHistory } from "react-router";

const { SubMenu, Item } = Menu;
const { Sider } = Layout;

const AdminSider = () => {
  const defaultSelected = "category";
  const dispatch = useDispatch();
  const { isAuthenticated, firstName } = useSelector((state => ({ ...state.user })));
  const history = useHistory();

  const handleLogout = () => {
    if (!isAuthenticated) return;
    dispatch(authUser(false));
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <Sider width={210}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[defaultSelected]}
        defaultOpenKeys={["sub1", "sub2", "sub3"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
          {firstName}
        </Item>
        <SubMenu key="sub1" icon={<ContainerOutlined />} title="Manage Catalog">
          <Item key="category">
            <Link to="/admin/category">Create Category</Link>
          </Item>
          <Item key="sub">
            <Link to="/admin/category-list">List of Categories</Link>
          </Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<DatabaseOutlined />} title="Manage Product">
          <Item key="product">
            <Link to="/admin/product">Product</Link>
          </Item>
          <Item key="products">
            <Link to="/admin/products">Products</Link>
          </Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<AccountBookOutlined />} title="Other">
          <Item key="dashbord">
            <Link to="/admin/dashbord">Dashbord</Link>
          </Item>
          <Item key="password">
            <Link to="/admin/password">Manage Password</Link>
          </Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default AdminSider;