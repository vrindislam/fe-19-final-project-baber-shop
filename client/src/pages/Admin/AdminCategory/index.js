import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Divider, Card } from "antd";
import AdminSider from "../../../components/AdminSider";
import CategoryForm from "../../../components/Forms/CategoryForm";
import CategoryService from "../../../services/CategoryService";
import noImage from "../../../images/no_image.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./styles.less";

const { Content } = Layout;
const { Meta } = Card;

const AdminCatergory = () => {
  const [listOfCategories, setListOfCategories] = useState(null);

  useEffect(() => {
    let cleanupFunction = false;
    CategoryService.getCategoriesSortedPerLevels()
      .then(res => {
          console.log("RES", Object.entries(res));
          // to avoid error message => to update state in case component is not unmounted | due to asyn function component can be already unmounted once get response
          if (!cleanupFunction) setListOfCategories(Object.entries(res));
        }
      )
      .catch(err => console.log(err));
    return () => cleanupFunction = true;
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
            {listOfCategories && listOfCategories.map(cat => {
                const [level, categories] = cat;
                return (
                  <div key={`level_${level}`}>
                    <Divider orientation="left">{`Category Level ${level}`}</Divider>
                    <div className={'category-list-contaier'}>
                      {categories && categories.length > 0 && categories.map(category => {
                          const { name, _id, id, imgUrl, description } = category;
                          return (
                            <div className={'category-list-item'} key={`${id}_${_id}`}>
                              <Card
                                style={{ width: "350px", padding: '3px'}}
                                cover={
                                  <img
                                    alt={name}
                                    src={noImage || imgUrl}
                                    style={{ height: "300px", objectFit: "cover" }}
                                    className="p-1"
                                  />
                                }
                                actions={[
                                  <Link to={`/admin/product/${id}`}>
                                    <EditOutlined className="text-warning" />
                                  </Link>,
                                  <DeleteOutlined className="text-danger"
                                                  onClick={() => console.log("handleRemove(slug)")} />
                                ]}
                              >
                                <Meta
                                  title={name}
                                  description={`${description && description.substring(0, 40)}...`}
                                />
                              </Card>
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