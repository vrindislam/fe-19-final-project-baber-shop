import React, { useState } from "react";
import { Layout, Row, Col, Divider, Button } from "antd";
import useAsyncEffect from "use-async-effect";
import AdminSider from "../../../components/AdminSider";
import ProductForm from "../../../components/Forms/ProductForm";
import CategoryService from "../../../services/CategoryService";
import FilterServices from "../../../services/FilterServices";
import withModal from "../../../components/Modal";
import { useDispatch } from "react-redux";
import { showModal } from "../../../store/modal/modalAction";
import Preloader from "../../../components/Preloader";

import "./styles.less";

const { Content } = Layout;

const AdminProduct = () => {
  const [listOfCategories, setListOfCategories] = useState(null);
  const [preloaderStatusCategory, setPreloaderStatusCategory] = useState(false);
  const [preloaderStatusFilters, setPreloaderStatusFilters] = useState(false);
  const [filters, setFilters] = useState([]);
  const typeOfModal = "categoryFormInModal";
  const dispatch = useDispatch();
  const ModalProductForm = withModal(ProductForm, typeOfModal);

  useAsyncEffect(async isMounted => {
    setPreloaderStatusCategory(true);
    CategoryService.getCategoriesSortedPerLevels()
      .then(res => {
          if (!res) return;
          setPreloaderStatusCategory(false);
          if (!isMounted()) return;
          setListOfCategories(Object.entries(res));
        }
      )
      .catch(err => {
        setPreloaderStatusCategory(false);
        console.log(err);
      });
  }, []);

  useAsyncEffect(async isMounted => {
    setPreloaderStatusFilters(true);
    FilterServices.getFiltersByType(["brand", "country"])
      .then(res => {
          if (!res) return;
          setPreloaderStatusFilters(false);
          if (!isMounted()) return;
          setFilters(res);
        }
      )
      .catch(err => {
        setPreloaderStatusFilters(false);
        console.log(err);
      });
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

  const dispatchModal = (status) => {
    dispatch(showModal({ status, type: typeOfModal }));
  };

  return (
    <Layout className="admin-category-container">
      <AdminSider />
      <Content className="category-content-container">
        <Divider orientation="left">
          {!preloaderStatusFilters && !preloaderStatusCategory ? <span>Create Product</span> : <Preloader />}
        </Divider>
        <Row gutter={16}>
          <Col span={22} style={{ margin: "auto", textAlign: "left" }}>
            <Button type={"primary"} style={{ marginLeft: "14px" }} onClick={() => dispatchModal(true)}>Create
              Product</Button>
            <ModalProductForm
              width={800}
              listOfCategories={listOfCategories && listOfCategories}
              loadCategories={loadCategories}
              dispatchModal={dispatchModal}
              filters={filters}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AdminProduct;