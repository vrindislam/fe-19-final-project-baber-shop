import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import Preloader from "../Preloader";
import { Avatar, Badge } from "antd";

import "./styles.less";

const imageUpload = ({ images, setImages }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [preloaderStatus, setPreloaderStatus] = useState(false);

  const fileUploadAndResize = (e) => {
    console.log(Object.values(e.target.files));
    setPreloaderStatus(true);
    // resize image before upload to cloudinary
    const files = Object.values(e.target.files);
    const allUploadedFiles = [...images.imgUrl];
    if (files) {
      for (const file of files) {
        console.log("File", file);
        Resizer.imageFileResizer(
          file,
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log('URI====>',uri)
            axios
              .post(
                `${process.env.REACT_APP_API}/cloudinary/uploadimages`,
                { image: uri })
              .then(res => {
                setPreloaderStatus(false);
                console.log("IMAGE Respond data =>>>>>>>", res);
                allUploadedFiles.push(res.data);
                setImages({ ...images, imgUrl: allUploadedFiles });
              })
              .catch(err => {
                setPreloaderStatus(false);
                console.log(err);
              });
          },
          "base64"
        );
      }

    }
  };

  const handleImageRemove = (public_id) => {
    setPreloaderStatus(true);
    // console.log("remove image", public_id);
    axios
      .post(
        `${process.env.REACT_APP_API}/cloudinary/removeimage`,
        { public_id }
      )
      .then((res) => {
        setPreloaderStatus(false);
        const { imgUrl } = images;
        const filteredImages = imgUrl.filter((item) => {
          return item.public_id !== public_id;
        });
        setImages({ ...images, imgUrl: filteredImages });
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
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
      {preloaderStatus && <Preloader />}
      <div className={"row"}>
        {images.imgUrl &&
        images.imgUrl.map((image) => (
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
      </div>
    </>

  );
};

export default imageUpload;