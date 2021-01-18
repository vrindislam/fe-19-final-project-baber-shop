import React, {useEffect} from 'react'
import 'antd/dist/antd.less'
import { Layout, Menu } from 'antd';
import SiteHeader from './components/header/Header'
import { getProducts } from './functions/products/product'
const { Header, Content, Footer } = Layout;

const App = () => {

  useEffect( () => {
    console.log('ROUTE',`${process.env.REACT_APP_API}`)
    getProducts()
      .then(products => console.log(products.data[0]) )
      .catch(err => console.log(err))
    ;
  },[])

  return (
    <Layout>
      <SiteHeader/>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, height: '100vh' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
};

export default App;