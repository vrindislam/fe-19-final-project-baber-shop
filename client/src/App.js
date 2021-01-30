import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import "antd/dist/antd.less";
import { Layout } from "antd";
import SiteHeader from "./components/Header";
import MainRoutes from "./routes/MainRoutes";
import jwt_decode from "jwt-decode";
import { authUser } from "./store/user/userAction";

const { Content, Footer } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // to check token expiration once App_did_Mount, after it will be checked through middleware in redux with every store request
    if (localStorage.getItem("token")) {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if(decoded && decoded.exp && (decoded.exp < Date.now() / 1000) ) {
        localStorage.removeItem("token");
        dispatch(authUser({isAdmin: false}));
        history.push('/');
      } else {
        delete decoded.iat
        dispatch(authUser({...decoded, isAuthenticated: true}));
      }
    }
  },[dispatch, history])

  return (
    <Layout>
      <SiteHeader />
      <Content className="site-layout" style={{ padding: "0 0px", marginTop: 64 }}>
        <div className="site-layout-background" style={{ minHeight: 380 }}>
          <MainRoutes />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;