import React from "react";
import './style.less';
import { Form, Input, Button} from 'antd';

// form layout settings
const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};

// constants to create form input fields

const rules = [{required: true, message: 'Please input your username'}];
const fieldsSetArr = [
  {label: "Category ID", name: "id", rules, hidden: false},
  {label: "Category Name", name: "name", rules, hidden: false},
  {label: "Category Description", name: "description", rules, hidden: false},
  {label:"Image URL", name:"imgUrl", hidden: false},
  {label:"Level", name:"level", hidden: true},
  {label:"Parent ID", name:"parentId", hidden: true}
]


const CategoryForm =() => {
  const [form] = Form.useForm()

  // function to create form input fields based on constants
  const setUpFormFields = () => fieldsSetArr.map(category => (
    <Form.Item key={category.name} {...category}>
      <Input placeholder={`input ${category.label}`} />
    </Form.Item>
  ))

  // handle form on succesful submit
  const onFinish = (values) => {
    console.log('Values =>>>>>', values);
  };

  // handle form on faild submit
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      name='admin-category-form'
      form={form}
      {...layout}
      layout='vertical'
      initialValues={{
        id: '',
        name: '',
        description: '',
        imgUrl: 'TBD_img/catalog/women.png',
        level: 0,
        parentId: 'null',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {setUpFormFields()}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CategoryForm;