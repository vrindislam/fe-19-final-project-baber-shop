import React from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Card, message, Modal } from "antd";
import noImage from "../../blank_image/no_image.png";
import CategoryService from "../../services/CategoryService";
import "./style.less";

const { Meta } = Card;
const { confirm } = Modal;

const AdminCategoryCard = ({ category: { name, imgUrl, description, id }, loadCategories }) => {

  const handleDelete = () => {
    confirm({
      title: `Do you want to delete category ${name}?`,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        // some logical checks must be before deleting. To clarify with Saribeg
        CategoryService.deleteCategory(id)
          .then(res => {
            message.success(res.message);
            loadCategories()
          })
          .catch(err => message.error(err))
      },
      onCancel() {message.warning('Deletion Canceled');},
    });
  }

  return (
    <Card
      style={{ width: "350px" }}
      cover={
        <img
          alt={name}
          src={imgUrl && imgUrl.length > 0 ? `/${imgUrl}` : noImage}
          style={{ height: "300px", objectFit: "cover", padding: "2px" }}
        />
      }
      actions={[
        <Link to={`/admin/category/${id}`}>
          <EditOutlined className="text-warning" />
        </Link>,
        <DeleteOutlined
          className="text-danger"
          onClick={handleDelete} />
      ]}
    >
      <Meta
        title={name}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default AdminCategoryCard;