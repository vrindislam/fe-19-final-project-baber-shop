import React, { useState } from "react";
import axios from "axios";
import Preloader from "../Preloader";
import { Avatar, Badge } from "antd";

import "./styles.less";

const ImageUpload = ({ images, setImages, cloudinaryfolderName }) => {

  const [preloaderStatus, setPreloaderStatus] = useState(false);

  const fileUpload = (e) => {
    setPreloaderStatus(true);
    const files = Object.values(e.target.files);
    const allUploadedFiles = [...images];
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          axios
            .post(
              `${process.env.REACT_APP_API}/cloudinary/uploadimages`,
              { image: reader.result, folder: cloudinaryfolderName })
            .then(res => {
              setPreloaderStatus(false);
              allUploadedFiles.push(res.data);
              setImages([...allUploadedFiles]);
            })
            .catch(err => {
              setPreloaderStatus(false);
              console.log(err);
            });
        };
      }
    }
  };

  const handleImageRemove = (public_id) => {
    setPreloaderStatus(true);
    axios
      .post(
        `${process.env.REACT_APP_API}/cloudinary/removeimage`,
        { public_id }
      )
      .then((res) => {
        setPreloaderStatus(false);
        const filteredImages = [...images].filter((item) => {
          return item.public_id !== public_id;
        });
        setImages(filteredImages);
      })
      .catch((err) => {
        console.log(err);
        setPreloaderStatus(false);
      });
  };

  return (
    <>
      <div className={"row"}>
        <label className="choose-file-label">
          Choose File
          <input
            type="file"
            multiple
            hidden
            accept="images/*"
            onChange={fileUpload}
          />
        </label>
      </div>
      {preloaderStatus && <Preloader />}
      {!preloaderStatus &&
      <div className={"row"}>
        {images.length > 0 &&
        images.map((image) => (
          <Badge
            count="X"
            key={image.public_id}
            onClick={() => handleImageRemove(image.public_id)}
            style={{ cursor: "pointer" }}
          >
            <Avatar
              src={image.url}
              size={100}
              shape="square"
              style={{ margin: 10 }}
            />
          </Badge>
        ))}
      </div>}

    </>

  );
};

export default ImageUpload;