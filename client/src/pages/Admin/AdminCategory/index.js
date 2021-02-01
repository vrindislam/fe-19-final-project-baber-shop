import React, { useState } from "react";
import { Layout, Row, Col, Divider } from "antd";
import AdminSider from "../../../components/AdminSider";
import CategoryForm from "../../../components/Forms/CategoryForm";
import CategoryService from "../../../services/CategoryService";
import "./styles.less";
import AdminCategoryCard from "../../../components/AdminCategoryCard";
import useAsyncEffect from "use-async-effect";

const { Content } = Layout;

const AdminCatergory = () => {
  const [listOfCategories, setListOfCategories] = useState(null);

  useAsyncEffect(async isMounted => {
    CategoryService.getCategoriesSortedPerLevels()
      .then(res => {
          if (!isMounted()) return;
          setListOfCategories(Object.entries(res));
        }
      )
      .catch(err => console.log(err));
  }, []);

  //  to put function in form props to update categories after new categoty adding
  const loadCategories = () => {
    CategoryService.getCategoriesSortedPerLevels()
      .then(res => {
          setListOfCategories(Object.entries(res));
        }
      )
      .catch(err => console.log(err));
  };

  return (
    <Layout className="admin-category-container">
      <AdminSider />
      <Content className="category-content-container">
        <Divider orientation="left">Create Category</Divider>
        <Row gutter={16}>
          <Col span={24}>
            <CategoryForm loadCategories={loadCategories} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            {listOfCategories && listOfCategories.map(cat => {
                const [level, categories] = cat;
                return (
                  <div key={`level_${level}`}>
                    <Divider orientation="left">{`Category Level ${level}`}</Divider>
                    <div className={"category-list-contaier"}>
                      {categories && categories.length > 0 && categories.map(category => {
                          return (
                            <div className={"category-list-item"} key={`${category._id}`}>
                              <AdminCategoryCard category={category} />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AdminCatergory;