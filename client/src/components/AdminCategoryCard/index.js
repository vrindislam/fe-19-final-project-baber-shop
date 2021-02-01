import React from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import noImage from "../../blank_image/no_image.png";
import "./style.less";

const { Meta } = Card;

const AdminCategoryCard = ({ category: { name, imgUrl, description, id } }) => {

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
        <Link to={`/admin/product/${id}`}>
          <EditOutlined className="text-warning" />
        </Link>,
        <DeleteOutlined
          className="text-danger"
          onClick={() => console.log("handleRemove(slug)")} />
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