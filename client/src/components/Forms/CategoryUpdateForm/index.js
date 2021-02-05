import React, { useEffect } from "react";
import {useHistory} from "react-router";
import { Form, Input, Button, message } from "antd";
import { fieldsSetArr, layout, tailLayout } from "./constants";
import CategoryService from "../../../services/CategoryService";

import "./style.less";

const CategoryUpdateForm = ({ categoryToUpdate }) => {
  const history = useHistory();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: categoryToUpdate && categoryToUpdate.name ? categoryToUpdate.name : "",
      description: categoryToUpdate && categoryToUpdate.description ? categoryToUpdate.description : "",
      imgUrl: categoryToUpdate && categoryToUpdate.imgUrl ? categoryToUpdate.imgUrl : ""
    });
  }, [categoryToUpdate, form]);

  // function to create form input fields based on constants
  const setUpFormFields = () => fieldsSetArr.map(category => {
    let element = "";
    const [fieldType, settings] = category;
    switch (fieldType) {
      case "input":
        element = (
          <Form.Item key={settings.name} {...settings}>
            <Input placeholder={`input ${settings.label}`} />
          </Form.Item>
        );
        break;
      default:
        element = null;
    }
    return element;
  });

  // handle form on a successfully submit
  const onFinish = (values) => {
    console.log('Cat to update ===>>>', categoryToUpdate.id);
    console.log('Values ===>>>', values);
    CategoryService.updateCategory(categoryToUpdate.id, values)
      .then(res => {
        message.success(`Category ${res.name} was updated`, 1.5);
        history.push('/admin/category');
      })
      .catch(err => {
        message.error(`${err}`, 1.5);
      });
  };

  // handle form on faild submit
  const onFinishFailed = (errorInfo) => {
    console.log("Form Failed on submit:", errorInfo);
    message.error("Form Failed on submit", 1.5);
  };

  return (
    <Form
      name="admin-category-form"
      form={form}
      {...layout}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {setUpFormFields()}
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={() => form.resetFields()} style={{ marginLeft: "20px" }}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryUpdateForm;