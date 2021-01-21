import React from "react";
import './style.less';
import { Form, Input, Button} from 'antd';


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
  // const [fieldValues, setFieldValues] = useState({
  //   id: '',
  //   name: '',
  //   description: '',
  //   imgUrl: 'TBD_img/catalog/women.png',
  //   level: 0,
  //   parentId: 'null',
  // })
  const [form] = Form.useForm()

  // useEffect(() => {
  //   console.log(fieldValues);
  // }, [fieldValues])

  const setUpFormFields = () => fieldsSetArr.map(category => (
    <Form.Item key={category.name} {...category}>
      <Input placeholder={`input ${category.label}`} />
    </Form.Item>
  ))

  const onFinish = (values) => {
    console.log('Values =>>>>>', values);
    // console.log('fieldValues =>>>>>', fieldValues);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // const handleChanges = (value) => {
  //   const [name, val] = Object.entries(value)[0];
  //   setFieldValues(prev => {
  //     return {
  //       ...prev,
  //       [name]: val
  //     }
  //   })
  // }

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
      // onValuesChange={handleChanges}
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