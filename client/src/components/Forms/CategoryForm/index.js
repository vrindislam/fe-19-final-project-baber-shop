import React, {useState} from "react";
import './style.less';
import { Form, Input, Button, message} from 'antd';
import {createCategory} from "./functions";

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

// constants to create form input fields8

const rules = [{required: true, message: 'field is required'}];
const fieldsSetArr = [
  {label: "Category ID", name: "id", rules, hidden: false},
  {label: "Category Name", name: "name", rules, hidden: false},
  {label: "Category Description", name: "description", rules, hidden: false},
  {label:"Image URL", name:"imgUrl", hidden: false},
  {label:"Level", name:"level", hidden: false},
  {label:"Parent ID", name:"parentId", hidden: false}
]


const CategoryForm =() => {
  const [form] = Form.useForm()
  const [disabled, setDisabled] = useState(true)

  // function to create form input fields based on constants
  const setUpFormFields = () => fieldsSetArr.map(category => (
    <Form.Item key={category.name} {...category}>
      <Input placeholder={`input ${category.label}`} />
    </Form.Item>
  ))

  // handle form on succesful submit
  const onFinish = (values) => {
    console.log('Values =>>>>>', values);

    // token will be removed
    const Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDM3ZmU5YjQ5NzkzNWIzOGE4YTlhYiIsImZpcnN0TmFtZSI6IkVtaWxpZW4iLCJsYXN0TmFtZSI6IlNpZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMTIzNDM4MCwiZXhwIjoxNjExMjcwMzgwfQ.XoD1ae07PBIvN5EfG1aK2umYySTwowm0GNwx9YZ_D1g'

    // function will be changed
    createCategory(values, Authorization)
      .then(res => {
        console.log(res.data)
        message.success(`new Category ${res.data.name} was created`, 1.5);
      })
      .catch(err => {
        message.error(`${err}`, 1.5);
      });

  };

  // handle form on faild submit
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // Activate Submit button once form is filled
  const handleSubmitButtonDisable = (e) => {
    setDisabled(!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length > 0);
  }


  return (
    <Form
      name='admin-category-form'
      form={form}
      {...layout}
      layout='vertical'
      initialValues={{
        id: '',
        name: '',
        description: 'some description',
        imgUrl: 'img/catalog/women.png',
        level: 0,
        parentId: 'null',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFieldsChange={handleSubmitButtonDisable}
    >
      {setUpFormFields()}
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={disabled}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CategoryForm;