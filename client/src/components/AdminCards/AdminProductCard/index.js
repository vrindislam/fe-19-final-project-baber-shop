import React from "react";
import { Card } from "antd";
import noImage from "../../../blank_image/no_image.png";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import "./styles.less";

const { Meta } = Card;
// const { confirm } = Modal;

const AdminProductCard = ({ product }) => {

  const {brand, categories, currentPrice, imageUrls, itemNo, name, quantity, country, enabled, description, _id }  = product

  const handleDelete = () => {
    console.log('delete')
  }

  return (
    <Card
      style={{ width: "350px", margin:'10px' }}
      cover={
        <img
          alt={name}
          src={imageUrls && imageUrls.length > 0 && imageUrls[0].url ? imageUrls[0].url : noImage}
          style={{ height: "300px", objectFit: "cover", padding: "2px" }}
        />
      }
      actions={[
        <Link to={`/admin/product/${_id}`}>
          <EditOutlined className="text-warning" />
        </Link>,
        <DeleteOutlined
          className="text-danger"
          onClick={handleDelete} />
      ]}
    >
      <Meta
        title={`${categories}: (${itemNo}) ${name}`}
        description={description ?`${description.substring(0, 40)}...` : 'no description'}
      />
      <ul className={'admin-product-card-list-container'}>
        <li><span>Brand:</span> {brand}</li>
        <li><span>Country:</span> {country}</li>
        <li><span>Price:</span> {currentPrice}$</li>
        <li><span>Quantity:</span> {quantity}</li>
        <li><span>Enabled:</span> {enabled ? 'Yes' : 'No'}</li>
      </ul>
    </Card>
  );
}

export default AdminProductCard;